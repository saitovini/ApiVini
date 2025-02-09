using System.Collections.Generic;
using ApiVini.Models;

namespace ApiVini.Services
{
    public interface IUserService
    {
        List<User> GetUser();
        User GetUserById(int id);
        void AddUser(User user);
        void UpdateUser(User user);
        void DeleteUser(int id);
    }
}