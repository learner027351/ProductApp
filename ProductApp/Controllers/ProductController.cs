using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Data;
using ProductApp.Model;

namespace ProductApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("getAllProduct")]

        public IActionResult getAllProducts()
        {
            try
            {
                var product = _context.Products.ToList();

                if (product.Count == 0)
                {
                    return NotFound("No products are available!");

                }

                return Ok(product);
            }
            catch(Exception ex)
            {
                return StatusCode(500, "Internal Server Error: " + ex.Message);
            }
        }

        [HttpPost("AddProduct")]

        public IActionResult AddProduct(Product Products)
        {
            _context.Products.Add(Products);
            _context.SaveChanges();

            return Ok("Product Added successfully!");
        }

        [HttpPut("UpdateProduct/{id}")]

        public IActionResult UpdateProduct(Product Products,int id)
        {

            try
            {
                var isRecordAvailable = _context.Products.SingleOrDefault(s=>s.ProductId==id);
                if (isRecordAvailable == null)
                {
                    return NotFound("Product Not Found!");
                }

                isRecordAvailable.ProductName = Products.ProductName;
                isRecordAvailable.ProductPrice = Products.ProductPrice;
                isRecordAvailable.ProductDescription = Products.ProductDescription;
                isRecordAvailable.isExpire = Products.isExpire;
                isRecordAvailable.mfg_date = Products.mfg_date;
                isRecordAvailable.ProductCategory = Products.ProductCategory;

                _context.SaveChanges();

                return Ok("Product Updated successfully!");
            }
            catch(Exception ex)
            {
                return StatusCode(500, "Internal Server Error: "+ ex.Message);
            }
            
        }

        [HttpDelete("DeleteProduct/{id}")]

        public IActionResult DeleteProdut(int id)
        {
            try
            {
                var record = _context.Products.SingleOrDefault(s => s.ProductId == id);
                if(record == null)
                {
                    return NotFound("Product not found");
                }
                _context.Products.Remove(record);
                _context.SaveChanges();
                return Ok("Product Deleted Successfully!");
            }
            catch(Exception ex)
            {
                return StatusCode(500, "internal Server Error: " + ex.Message);
            }
        }


    }
}
