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
    public class CommentsController : ControllerBase
    {
        private readonly SMADbContext _context;

        public CommentsController(SMADbContext context)
        {
            _context = context;
        }

        // GET: api/Comments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserAndComment>>> GetComments()
        {
            var comments = await _context.Comments.ToListAsync();
            var result = new List<UserAndComment>();
            foreach (var comment in comments)
            {
                var user = await _context.Users.FindAsync(comment.user_id);
                var element = new UserAndComment(user, comment);
                result.Add(element);
            }
            //Console.WriteLine("GetComments done");
            return result;
        }






// GET: api/Comments/5
[HttpGet("{id}")]
        public async Task<ActionResult<Comment>> GetComment(int id)
        {
            var comment = await _context.Comments.FindAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return comment;
        }

        // PUT: api/Comments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComment(int id, Comment comment)
        {
            if (id != comment.comment_id)
            {
                return BadRequest();
            }

            _context.Entry(comment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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

        // POST: api/Comments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Comment>> PostComment(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComment", new { id = comment.comment_id }, comment);
        }

        // DELETE: api/Comments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {
            var comment = await _context.Comments.FindAsync(id);
            if (comment == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //returns a LIST of replies to a comment when passed a comment_id, if no replies then returns nothing
        //GET: api/Comments/replies/2
        [HttpGet("replies/{id}")]
        public async Task<ActionResult<IEnumerable<Comment>>> GetReplies(int id)
        {
            var replies = await _context.Comments.Where(r => r.parent_comment_id == id).ToListAsync();
            return replies;
        }

        private bool CommentExists(int id)
        {
            return _context.Comments.Any(e => e.comment_id == id);
        }
    }
}
