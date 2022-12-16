using SMA.BackendOps.Models;

namespace SMA.BackendOps.classes
{
    public class UserAndPost
    {
        public User user { get; set; }
        public Post post { get; set; }

        public UserAndPost(User user, Post post)        {
            this.user = user;
            this.post = post;
        }

    }
}
