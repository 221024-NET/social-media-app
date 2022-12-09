using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMA.BackendOps.Models
{


    [Table("Posts", Schema = "SMA")]
    public class Post { 
        [Key]
        public int post_id { get; set; }

        //FK to users table
        [ForeignKey("User")]
        public int user_id { get; set; }
        public string content { get; set; }

        [DataType(DataType.Date)]
        public DateTime date { get; set; }
        public byte[]? image { get; set; }
        
        
    }
}
