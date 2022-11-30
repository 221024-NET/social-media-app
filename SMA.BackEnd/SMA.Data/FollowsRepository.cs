using System.Data.SqlClient;
using System.Text;

namespace SMA.Data;

public class FollowsRepository : IFollowsRepository
{
    public List<int> GetEveryoneThisUserFollows(string connValue, int userid)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        // retrieve a ticket from the db
        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" SELECT ");
        cmdText.Append(" FollowID ");
        cmdText.Append(" FROM SMA.Follows ");
        cmdText.Append(" WHERE FollowerID = @UID ");
        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@UID", userid);
        using SqlDataReader reader = cmd.ExecuteReader();

        // Parse the returned data table
        List<int> Others = new List<int>();
        while (reader.Read())
        {
            int id = Int32.Parse(reader["FollowID"].ToString());
            Others.Add(id);
        }
        reader.Close();
        cmd.Dispose();

        return Others;
    }

    public List<int> GetEveryoneThatFollowsThisUser(string connValue, int userid)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        // retrieve a ticket from the db
        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" SELECT ");
        cmdText.Append(" FollowerID ");
        cmdText.Append(" FROM SMA.Follows ");
        cmdText.Append(" WHERE FollowID = @UID ");
        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@UID", userid);
        using SqlDataReader reader = cmd.ExecuteReader();

        // Parse the returned data table
        List<int> Followers = new List<int>();
        while (reader.Read())
        {
            int id = Int32.Parse(reader["FollowerID"].ToString());
            Followers.Add(id);
        }
        reader.Close();
        cmd.Dispose();

        return Followers;
    }

    public int Create(string connValue, int followid, int followerid)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        // Add ticket to db
        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" INSERT INTO SMA.Follows ");
        cmdText.Append(" (FollowID, FollowerID, FollowDate) ");
        cmdText.Append(" VALUES ");
        cmdText.Append(" (@followid, @followerid, SYSUTCDATETIME()); ");
        cmdText.Append(" SELECT @@IDENTITY;");
        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@followid", followid);
        cmd.Parameters.AddWithValue("@followerid", followerid);

        // retrieve the returned identity followkey
        int newId = Convert.ToInt32(cmd.ExecuteScalar());
        return newId;
    }

    /// <summary>
    /// Delete a Follow Table Entry via the ids of the two users in question
    /// </summary>
    /// <param name="connValue"></param>
    /// <param name="followid"></param>
    /// <param name="followerid"></param>
    public void Delete(string connValue, int followid, int followerid)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" DELETE FROM SMA.Follows ");
        cmdText.Append(" WHERE FollowID = @followid ");
        cmdText.Append(" AND FollowerID = @followerid; ");

        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@followid", followid);
        cmd.Parameters.AddWithValue("@followerid", followerid);
        cmd.ExecuteNonQuery();
        cmd.Dispose();
        return;
    }

    /// <summary>
    /// Delete a Follow Table Entry via the primary key
    /// </summary>
    /// <param name="connValue"></param>
    /// <param name="followkey"></param>
    public void Delete(string connValue, int followkey)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" DELETE FROM SMA.Follows ");
        cmdText.Append(" WHERE FollowKEY = @followkey ");

        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@followkey", followkey);
        cmd.ExecuteNonQuery();
        cmd.Dispose();
        return;
    }
}