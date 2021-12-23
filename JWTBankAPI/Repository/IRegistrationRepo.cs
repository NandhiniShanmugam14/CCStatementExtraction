using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTBankAPI.Repository
{
    public interface IRegistrationRepo<Registration>
    {
        public List<Registration> GetRegistrationCredentials();
    }
}
