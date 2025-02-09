using System.Collections.Generic;
using System.Linq;
using ApiVini.Models;
using ApiVini.Data;


namespace ApiVini.Services
{
    public class PurchaseService : IPurchaseService
    {
        private readonly AppDbContext _context;

        public PurchaseService(AppDbContext context)
        {
            _context = context;
        }

        public List<Purchase> GetPurchases()
        {
            return _context.Purchase.ToList();
        }

        public Purchase GetPurchaseById(int id)
        {
            return _context.Purchase.FirstOrDefault(p => p.Id == id);
        }

        public void AddPurchase(Purchase purchase)
        {
            _context.Purchase.Add(purchase);
            _context.SaveChanges();
        }

        public void UpdatePurchase(Purchase purchase)
        {
            _context.Purchase.Update(purchase);
            _context.SaveChanges();
        }

        public void DeletePurchase(int id)
        {
            var purchase = _context.Purchase.FirstOrDefault(p => p.Id == id);
            if (purchase != null)
            {
                _context.Purchase.Remove(purchase);
                _context.SaveChanges();
            }
        }
    }
}