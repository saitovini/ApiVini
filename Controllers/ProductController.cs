using Microsoft.AspNetCore.Mvc;
using ApiVini.Models;
using ApiVini.Services;
using System.Collections.Generic;

namespace ApiVini.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _ProductService;

        public ProductController(IProductService ProductService)
        {
            _ProductService = ProductService;
        }

        // GET: api/Product
        [HttpGet]
        public IActionResult Get()
        {
            var Product = _ProductService.GetProduct();
            return Ok(Product);
        }

        // GET: api/Product/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var product = _ProductService.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        // POST: api/Product
        [HttpPost]
        public IActionResult Post(Product product)
        {
            _ProductService.AddProduct(product);
            return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
        }

        // PUT: api/Product/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            _ProductService.UpdateProduct(product);
            return NoContent();
        }

        // DELETE: api/Product/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _ProductService.DeleteProduct(id);
            return NoContent();
        }
    }
}