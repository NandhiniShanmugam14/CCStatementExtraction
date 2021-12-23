using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTBankAPI.Service
{
    public interface IRegistrationServ<Registration>
    {
        public List<Registration> GetRegistrationCredentials();
    }
}
