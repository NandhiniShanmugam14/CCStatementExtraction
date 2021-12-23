using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTBankAPI.BankModel
{
    public interface IRegistration<Registration>
    {
        public List<Registration> GetRegistrationCredentials();
    }
}
