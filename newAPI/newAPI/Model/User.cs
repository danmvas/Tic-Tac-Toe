using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace newAPI.Model
{
    public class User
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string NameUser { get; set; }

        [Required]
        public string Surname { get; set; }

        [Required]
        public string Passport { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Birthday { get; set; }

    }
}
