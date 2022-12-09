using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SMA.BackendOps.Models
{
    

    [Table("Users", Schema = "SMA")]
    public class User
    {
        [Key]
        public int user_id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string? first_name { get; set; }
        public string? last_name { get; set; }
        public long? phone_number { get; set; }

        [NotMapped]
        public string email { get; set; }
    }
}
