using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Net.Mime;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using SnapDay.Models;


namespace SnapDay.Controllers {
    // MVC is handling the routing for you.
    [Route ("api/[Controller]")]
    public class DatabaseController : Controller {

        public string DateCreated { get; }
        public string Username { get; }
        public string Password { get; }
        public string UserId { get; }
        public string UserFirstName { get; }
        public string UserLastName { get; }
        public string DateModify { get; }
    
    
        // api/database
        [HttpGet]
        public List<UserAccount> GetData() {

            // userAccount will be populated with the result of the query.
            List<UserAccount> userAccounts = new List<UserAccount> ();

            // GetFullPath will complete the path for the file named passed in as a string.
            string dataSource = "Data Source=" + Path.GetFullPath ("Snyder.db");
        
            // using will make sure that the resource is cleaned from memory after it exists
            // conn initializes the connection to the .db file.        
            using (SqliteConnection conn = new SqliteConnection(dataSource)) {

                conn.Open ();
            
                // sql is the string that will be run as an sql command
                string sql = $"select * from userAccount limit 200;";
            
                // command combines the connection and the command string and creates the query
                using (SqliteCommand command = new SqliteCommand (sql, conn)) {

                    // reader allows you to read each value that comes back and do something to it.
                    using (SqliteDataReader reader = command.ExecuteReader ()) {
                
                    // Read returns true while there are more rows to advance to. then false when done.
                        while (reader.Read ()) {

                    // map the data to the model.
                    UserAccount newUserAccount = new UserAccount () {
                    DateCreated = reader.GetBoolean (0),
                    Username = reader.GetString (1),
                    Password = reader.GetInt32 (2),
                    UserId = reader.GetInt32 (3),
                    UserFirstName = reader.GetString (4),
                    UserLastName = reader.GetString (5),
                    DateModify = reader.GetBoolean (6)
                };

                // add each one to the list.:
                userAccounts.Add(newUserAccount);
            }         
          }       
        }   
        conn.Close ();
    }

return userAccounts;
}

//         public bool? DateCreated { get; set; }
//         public string Username { get; set; }
//         public int? Password { get; set; }
//         public int? UserId { get; set; }
//         public string UserFirstName { get; set; }
//         public string UserLastName { get; set; }
//         public bool? DateModify { get; set; }
//
    }}