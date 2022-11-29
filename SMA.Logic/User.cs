using System;
using System.Collections.Generic;

namespace ESA.Logic;

public class User : IEquatable<User>
{
    // Fields
    public int UserID { get; set; } // db number
    //public string Useremail { get; set; } // login method 1 // not implemented
    public string Username { get; set; } // login method 2
    //public string Userphone { get; set; } // login method 3 // not implemented
    public string Password { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    // Constructors
    /// <summary>
    /// This overload is the empty User object that gets filled by the database.
    /// </summary>
    public User() { }

    /// <summary>
    /// This overload is the complete User object returned by the database
    /// </summary>
    /// <param name="name"></param>
    /// <param name="pass"></param>
    /// <param name="Id"></param>
    /// <param name="eType"></param>
    public User(int Id, string name, string pass)
    {
        UserID = Id;
        Username = name;
        Password = pass;
    }
    
    /// <summary>
    /// Uses the Username field
    /// This overload is the partial User object created by the user
    /// </summary>
    /// <param name="name"></param>
    /// <param name="pass"></param>
    public User(string name, string pass)
    {
        Username = name;
        Password = pass;
    }

    // Methods
    public override string ToString()
    {
        return "Name: " + FirstName + " " + LastName;
    }


    // The Equals override set follows
    // It may require more logic if multiple login methods are implemented
    public override bool Equals(object obj)
    {
        if (obj == null) return false;
        User objAsUser = obj as User;
        if (objAsUser == null) return false;
        else return Equals(objAsUser);
    }
    public override int GetHashCode()
    {
        return UserID;
    }

    /// <summary>
    /// Overrides object.Equals() and the == and != operators.
    /// Use to confirm correct login credentials
    /// </summary>
    /// <param name="other"></param>
    /// <returns>True if login credentials match</returns>
    public bool Equals(User other)
    {
        if (other == null) return false;
        if(this.Password.Equals(other.Password))
        {
            if(this.Username.Equals(other.Username))
            {
                return true;
            }
            if(true == true) {}
            return false;
        }
        return false;
    }
    
}
