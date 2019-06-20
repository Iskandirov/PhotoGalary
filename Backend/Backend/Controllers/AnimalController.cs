using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Backend.DAL.Entities;
using Backend.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AnimalController : ControllerBase
    {
        //static List<AnimalViewModel> data = new List<AnimalViewModel>
        //    {
        //        new AnimalViewModel
        //        {
        //            Id = 1,
        //            Name = "Верблюд",
        //            Image = "https://o-prirode.ru/wp-content/uploads/2017/10/verbljud-696x435.jpg",
        //        },
        //        new AnimalViewModel
        //        {
        //            Id = 2,
        //            Name = "Білка",
        //            Image = "http://www.zoolog.com.ua/ssavci/zv.gif",
        //        },
        //    };

        private readonly EFContext _context;
        public AnimalController(EFContext context)
        {
            _context = context;
        }

        // GET api/animal/search
        [HttpGet("search")]
        public IActionResult Get()
        {
            Thread.Sleep(300);
            List<AnimalViewModel> model = _context.Animals
                 .Select(a => new AnimalViewModel
                 {
                     Id = a.Id,
                     Name = a.Name,
                     Image = a.Image
                 }).ToList();

            return Ok(model);
        }

        // GET api/animal/add
        [HttpPost("add")]
        public IActionResult Post([FromBody]AnimalAddViewModel model)
        {
            //Random rand = new Random();
            _context.Animals.Add(new DbAnimal
            {
                Name = model.Name,
                Image = model.Image
            });
            _context.SaveChanges();
            return Ok();
        }

    }
}