using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTBankAPI.BankModel;

namespace JWTBankAPI.Repository
{
    public class RegistrationRepo : IRegistrationRepo<Registration>
    {
        private readonly IRegistration<Registration> obj_a;
        public RegistrationRepo(IRegistration<Registration> obj_a)
        {
            this.obj_a = obj_a;
        }
        public List<Registration> GetRegistrationCredentials()
        {
            return obj_a.GetRegistrationCredentials();
        }
    }
}
