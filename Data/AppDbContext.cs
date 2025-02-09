using Microsoft.EntityFrameworkCore;
using ApiVini.Models;

namespace ApiVini.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<Product> Product { get; set; } 
        public DbSet<Purchase> Purchase { get; set; }


    }
}