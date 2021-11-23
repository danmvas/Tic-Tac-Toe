using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static newAPI.Controllers.CrudController;

namespace newAPI.Services
{
    public class CheckUsers
    {
        public static bool ExistentUsers(string id)
        {
            using var db = new Data.ApplicationContext();
            return db.Users.Any(f => f.Id == id);
        }

    }
}
