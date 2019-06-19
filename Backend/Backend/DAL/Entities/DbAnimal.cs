using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DAL.Entities
{
    [Table("tblAnimals")]
    public class DbAnimal
    {
        [Key]
        public int Id { get; set; } 
        [Required, StringLength(255)]
        public string Name { get; set; }
        [StringLength(1000)]
        public string Image { get; set; }
    }
}
