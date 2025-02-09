using System.Collections.Generic;
using ApiVini.Models;

namespace ApiVini.Services
{
    public interface IProductService
    {
        List<Product> GetProduct();
        Product GetProductById(int id);
        void AddProduct(Product product);
        void UpdateProduct(Product product);
        void DeleteProduct(int id);
    }
}