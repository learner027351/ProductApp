using System.ComponentModel.DataAnnotations;

namespace ProductApp.Model
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        public string ProductName { get; set; } = null!;

        public double ProductPrice { get; set; }

        public string? ProductDescription { get; set; }

        public string? ProductCategory { get; set; }

        public bool isExpire { get; set; }

        public DateTime mfg_date { get; set; }

    }
}
