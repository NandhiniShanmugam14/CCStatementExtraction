using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace JWTBankAPI.Provider
{
    public interface IRegistrationAuthProvider<Registration>
    {
        public string GenerateJSONWebToken(BankModel.Registration admin_info, IConfiguration _config);
        public dynamic AuthenticateUser(BankModel.Registration login);
    }
}
