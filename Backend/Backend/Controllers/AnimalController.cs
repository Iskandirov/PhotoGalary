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
        // GET api/animal/search
        [HttpGet("search")]
        public IActionResult Get()
        {
            List<AnimalViewModel> model = new List<AnimalViewModel>
            {
                new AnimalViewModel
                {
                    Id = 4,
                    Name = "Верблюд",
                    Image = "https://o-prirode.ru/wp-content/uploads/2017/10/verbljud-696x435.jpg",
                },
                new AnimalViewModel
                {
                    Id = 4,
                    Name = "Білка",
                    Image = "http://www.zoolog.com.ua/ssavci/zv.gif",
                },
            };
            return Ok(model);
        }

    }
}