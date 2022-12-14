using Microsoft.EntityFrameworkCore;
//using System.ComponentModel.DataAnnotations;//.Schema;

namespace SMA.BackendOps.Models
{
    public class SMADbContext : DbContext
    {
        public SMADbContext(DbContextOptions<SMADbContext> options)
            : base(options)
        {
        }

        
        public DbSet<User> Users{ get; set; } = null!;
        public DbSet<Post> Posts { get;set;} = null!;
        public DbSet<Comment> Comments { get; set; } = null!;
        public DbSet<Like> Likes { get; set; } = null!;
        //public DbSet<Student> Students { get; set; }
    }
}
