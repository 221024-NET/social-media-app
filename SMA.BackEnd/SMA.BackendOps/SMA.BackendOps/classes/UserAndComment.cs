using SMA.BackendOps.Models;

namespace SMA.BackendOps.classes
{
    public class UserAndComment
    {
        public User user { get; set; }
        public Comment comment { get; set; }

        public UserAndComment(User user, Comment comment)
        {
            this.user = user;
            this.comment = comment;
        }

    }
}
