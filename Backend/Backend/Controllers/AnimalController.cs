using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AnimalController : ControllerBase
    {
        static List<AnimalViewModel> data = new List<AnimalViewModel>
            {
                new AnimalViewModel
                {
                    Id = 1,
                    Name = "Верблюд",
                    Image = "https://o-prirode.ru/wp-content/uploads/2017/10/verbljud-696x435.jpg",
                },
                new AnimalViewModel
                {
                    Id = 2,
                    Name = "Білка",
                    Image = "http://www.zoolog.com.ua/ssavci/zv.gif",
                },
            };
        // GET api/animal/search
        [HttpGet("search")]
        public IActionResult Get()
        {
          
            return Ok(data);
        }

        // GET api/animal/add
        [HttpPost("add")]
        public IActionResult Post([FromBody]AnimalAddViewModel model)
        {
            Random rand = new Random();
            data.Add(new AnimalViewModel
            {
                Id = rand.Next(10, 33432),
                Name = model.Name,
                Image = model.Image
            });
            return Ok();
        }

    }
}