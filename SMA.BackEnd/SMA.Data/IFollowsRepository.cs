
namespace SMA.Data;

public interface IFollowsRepository
{
    public List<int> GetEveryoneThisUserFollows(string connValue, int userid);
    public List<int> GetEveryoneThatFollowsThisUser(string connValue, int userid);
    public int Create(string connValue, int followid, int followerid);
    public void Delete(string connValue, int followid, int followerid);
    public void Delete(string connValue, int followkey);
}