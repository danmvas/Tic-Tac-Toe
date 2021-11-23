using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using newAPI.Model;
using newAPI.Services;

namespace newAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CrudController : ControllerBase
    {

        // GET api/<CrudController>/5
        [HttpGet("{id}")]
        public User Get(string id)
        {
            using var db = new Data.ApplicationContext();
            return db.Users.Find(id);
        }

        [HttpGet]
        public IEnumerable<User> GetAllUsers()
        {
            using var db = new Data.ApplicationContext();
            return db.Users.ToList();
        }

        // POST api/<CrudController>
        [HttpPost]
        public ActionResult Add(User user)
        {
            if (!CheckUsers.ExistentUsers(user.Id))
            {
                using var db = new Data.ApplicationContext();
                db.Users.Add(user);
                db.SaveChanges();
                return Ok();
            }

            return BadRequest();
        }

        // PUT api/<CrudController>/5
        [HttpPut("{id}")]
        public ActionResult Edit(string id, User users)
        {
            using var db = new Data.ApplicationContext();
            var userDb = db.Users.Find(id);

            if (userDb == null)
            {
                return BadRequest();
            }

            userDb.NameUser = users.NameUser;
            userDb.Surname = users.Surname;
            userDb.Passport = users.Passport;
            userDb.Email = users.Email;
            userDb.Phone = users.Phone;
            userDb.Birthday = users.Birthday;

            db.SaveChanges();

            return Ok();

        }

        // DELETE api/<CrudController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            using var db = new Data.ApplicationContext();
            var userDb = db.Users.Find(id);

            if (userDb == null)
            {
                return BadRequest();
            }

            db.Users.Remove(userDb);
            db.SaveChanges();

            return Ok();


        }
    }
}
