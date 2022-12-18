using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SMA.BackendOps.classes;
using SMA.BackendOps.Models;

namespace SMA.BackendOps.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly SMADbContext _context;

        public PostsController(SMADbContext context)
        {
            _context = context;
        }

        // GET: api/Posts
        //This Get method now returns a LIST of UserAndPost objects,which is basically a class with parameters (User user,Post post) 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserAndPost>>> GetPosts()
        {
            var posts = await _context.Posts.ToListAsync();
            var result = new List<UserAndPost>();
            foreach (var post in posts)
            {
                var user = await _context.Users.FindAsync(post.user_id);
                var element = new UserAndPost(user, post);
                result.Add(element);
            }
            return result;
        }

        // GET: api/Posts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            var post = await _context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }

        // PUT: api/Posts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPost(int id, Post post)
        {
            if (id != post.post_id)
            {
                return BadRequest();
            }

            _context.Entry(post).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Posts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Post>> PostPost([FromForm]Post post)
        {
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPost", new { id = post.post_id }, post);
        }

        // DELETE: api/Posts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //GET: api/Posts/getParentComments/{post_id} 
        //gets a list of all parent comments (comments that are not replies) when given a post id, returns nothing if no parent comments
        [HttpGet("getParentComments/{post_id}")]
        public async Task<ActionResult<IEnumerable<Comment>>> getParentComments(int post_id)
        {
            var parent_comments = await _context.Comments.Where(c => c.post_id == post_id && c.parent_comment_id == null).ToListAsync();
            return parent_comments;
        }
        //GET : api/Posts/getNumberOfLikes/{post_id}
        //returns an int of how many people liked post with post_id
        [HttpGet("getNumberOfLikes/{post_id}")]
        public async Task<ActionResult<int>> getNumberOfLikes(int post_id)
        {
            var likes = await _context.Likes.Where(l => l.post_id == post_id).ToListAsync();
            return likes.Count();
        }

        [HttpGet("doesUserLikePost/{post_id}/{user_id}")]
        public async Task<ActionResult<bool>> doesUserLikePost(int post_id,int user_id)
        {
            var like = await _context.Likes.Where(l => l.post_id == post_id && l.user_id == user_id).ToListAsync();
            if (like.Count() > 0)
                return true;

            return false;
        }

        private bool PostExists(int id)
        {
            return _context.Posts.Any(e => e.post_id == id);
        }
    }
}
