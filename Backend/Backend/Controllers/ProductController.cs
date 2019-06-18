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
    public class ProductController : ControllerBase
    {
        // GET api/animal/search
        [HttpGet("search")]
        public IActionResult Get()
        {
            List<ProductViewModel> model = new List<ProductViewModel>
            {
                new ProductViewModel
                {
                    Id = 3,
                    Name = "Огірок",
                    Image = "http://nochniki.com.ua/wp-content/uploads/2019/03/ogirok.jpg",
                },
                new ProductViewModel
                {
                    Id = 4,
                    Name = "Помідор",
                    Image = "https://produktoff.com/static/upload/goods/47/13447_original.jpg",
                },
            };
            return Ok(model);
        }

    }
}