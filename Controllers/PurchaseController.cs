using Microsoft.AspNetCore.Mvc;
using ApiVini.Models;
using ApiVini.Services;

namespace ApiVini.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PurchaseController : ControllerBase
    {
        private readonly IPurchaseService _purchaseService;

        public PurchaseController(IPurchaseService purchaseService)
        {
            _purchaseService = purchaseService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var purchases = _purchaseService.GetPurchases();
            return Ok(purchases);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var purchase = _purchaseService.GetPurchaseById(id);
            if (purchase == null)
            {
                return NotFound();
            }
            return Ok(purchase);
        }

        [HttpPost]
        public IActionResult Post(Purchase purchase)
        {
            _purchaseService.AddPurchase(purchase);
            return CreatedAtAction(nameof(GetById), new { id = purchase.Id }, purchase);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Purchase purchase)
        {
            if (id != purchase.Id)
            {
                return BadRequest();
            }
            _purchaseService.UpdatePurchase(purchase);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _purchaseService.DeletePurchase(id);
            return NoContent();
        }
    }
}