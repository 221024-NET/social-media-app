using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMA.BackendOps.Models
{

    [Table("Comments", Schema = "SMA")]
    public class Comment
    {
        [Key]
        public int comment_id { get; set; }
        public string comment { get; set; }
        [ForeignKey("User")]
        public int user_id { get; set; }
        [ForeignKey("Post")]
        public int post_id { get; set; }
        [ForeignKey("Comment")]
        public int? parent_comment_id { get; set; }
    }
}
