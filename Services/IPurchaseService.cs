using System.Collections.Generic;
using ApiVini.Models;

namespace ApiVini.Services
{
    public interface IPurchaseService
    {
        List<Purchase> GetPurchases();
        Purchase GetPurchaseById(int id);
        void AddPurchase(Purchase purchase);
        void UpdatePurchase(Purchase purchase);
        void DeletePurchase(int id);
    }
}