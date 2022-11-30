using System;
using SMA.Logic;
using System.Data.SqlClient;
using System.Text;

namespace SMA.Data;

// CRUD operations on the User object and the db
// UserID, Username, Password, FirstName, LastName
public class UserRepository// : IUserRepository
{

    /// <summary>
    /// Use to verify login information.
    /// </summary>
    /// <param name="connValue"></param>
    /// <param name="username"></param>
    /// <param name="password"></param>
    /// <returns>
    /// Returns full user object upon success
    /// Returns null upon failure
    /// </returns>
    public User GetbyCred(string connValue, string username, string password)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        // retrieve a ticket from the db
        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" SELECT ");
        cmdText.Append(" UserID, Username, Password, FirstName, LastName ");
        cmdText.Append(" FROM SMA.Users ");
        cmdText.Append(" WHERE Username = @user ");
        cmdText.Append(" AND Password = @pass ");
        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@user", username);
        cmd.Parameters.AddWithValue("@pass", password);
        using SqlDataReader reader = cmd.ExecuteReader();

        // Parse the returned data table
        User u = null;
        while (reader.Read())
        {
            u = new User
            {
                UserID = Int32.Parse(reader["UserID"].ToString()),
                Username = reader["Username"].ToString(),
                Password = reader["Password"].ToString(),
                FirstName = reader["FirstName"].ToString(),
                LastName = reader["LastName"].ToString()
            };
        }
        reader.Close();
        cmd.Dispose();

        return u;
    }

    /// <summary>
    /// Used internally to get the full user from only its pk_id, 
    /// which other tables store as a foreign key.
    /// </summary>
    /// <param name="connValue"></param>
    /// <param name="searchid"></param>
    /// <returns></returns>
    public User GetbyID(string connValue, int searchid)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        // retrieve a ticket from the db
        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" SELECT ");
        cmdText.Append(" UserID, Username, Password, FirstName, LastName ");
        cmdText.Append(" FROM SMA.Users ");
        cmdText.Append(" WHERE UserID = @UID ");
        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@UID", searchid);
        using SqlDataReader reader = cmd.ExecuteReader();

        // Parse the returned data table
        User u = null;
        while (reader.Read())
        {
            u = new User
            {
                UserID = Int32.Parse(reader["UserID"].ToString()),
                Username = reader["Username"].ToString(),
                Password = reader["Password"].ToString(),
                FirstName = reader["FirstName"].ToString(),
                LastName = reader["LastName"].ToString()
            };
        }
        reader.Close();
        cmd.Dispose();

        return u;
    }

    public User Create(string connValue, User u)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();

        // Add ticket to db
        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" INSERT INTO SMA.Users ");
        cmdText.Append(" (Username, Password, FirstName, LastName) ");
        cmdText.Append(" VALUES ");
        cmdText.Append(" (@username, @password, @firstname, @lastname); ");
        cmdText.Append(" SELECT @@IDENTITY;");
        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@username", u.Username);
        cmd.Parameters.AddWithValue("@password", u.Password);
        cmd.Parameters.AddWithValue("@firstname", u.FirstName);
        cmd.Parameters.AddWithValue("@lastname", u.LastName);

        // retrieve the returned identity pk_userid
        int newId = Convert.ToInt32(cmd.ExecuteScalar());
        u.UserID = newId;
        return u;
    }


    public void Update(string connValue, int usertoupdateID, User UpdatedUser)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();
        StringBuilder cmdText = new StringBuilder();
        cmdText.Append(" UPDATE SMA.Users SET ");
        cmdText.Append(" Username = @username ");
        cmdText.Append(", Password = @password ");
        cmdText.Append(", FirstName = @firstname ");
        cmdText.Append(", LastName = @lastname ");
        cmdText.Append(" WHERE UserID = @UID ");
        using SqlCommand cmd = new SqlCommand(cmdText.ToString(), connection);
        cmd.Parameters.AddWithValue("@username", UpdatedUser.Username);
        cmd.Parameters.AddWithValue("@password", UpdatedUser.Password);
        cmd.Parameters.AddWithValue("@firstname", UpdatedUser.FirstName);
        cmd.Parameters.AddWithValue("@lastname", UpdatedUser.LastName);
        cmd.Parameters.AddWithValue("@UID", usertoupdateID);
        cmd.ExecuteNonQuery();
        cmd.Dispose();
        return;
    }

    public void Delete(string connValue, int id)
    {
        using SqlConnection connection = new SqlConnection(connValue);
        connection.Open();
        string cmdText = " DELETE FROM SMA.Users" +
                " WHERE UserID = @UID";

        using SqlCommand cmd = new SqlCommand(cmdText, connection);
        cmd.Parameters.AddWithValue("@UID", id);
        cmd.ExecuteNonQuery();
        cmd.Dispose();
        return;
    }
}
