using SMA.Logic;

namespace SMA.Data;

public interface IUserRepository
{
    public User GetbyCred(string connValue, string username, string password);
    public User GetbyID(string connValue, int searchid);
    public User Create(string connValue, User u);
    public void Update(string connValue, int usertoupdateID, User UpdatedUser);
    public void Delete(string connValue, int id);
}
