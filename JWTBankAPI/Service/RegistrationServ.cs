using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTBankAPI.BankModel;
using JWTBankAPI.Repository;

namespace JWTBankAPI.Service
{
    public class RegistrationServ : IRegistrationServ<Registration>
    {
        private readonly IRegistrationRepo<Registration> repo_a;
        public RegistrationServ(IRegistrationRepo<Registration> repo_a)
        {
            this.repo_a = repo_a;
        }
        public List<Registration> GetRegistrationCredentials()
        {
            return repo_a.GetRegistrationCredentials();
        }
    }
}
