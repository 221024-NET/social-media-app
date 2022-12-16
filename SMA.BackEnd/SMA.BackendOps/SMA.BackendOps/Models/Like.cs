using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMA.BackendOps.Models
{
    [Table("Likes", Schema = "SMA")]
    public class Like
    {
        [Key]
        public int like_id { get; set; }
        //FK to User table
        [ForeignKey("User")]
        public int user_id { get; set; }

        [ForeignKey("Post")]
        public int post_id { get; set; }
    }
}
