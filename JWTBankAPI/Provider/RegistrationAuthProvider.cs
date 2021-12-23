using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JWTBankAPI.BankModel;
using JWTBankAPI.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace JWTBankAPI.Provider
{
    public class RegistrationAuthProvider : IRegistrationAuthProvider<Registration>
    {
        private readonly IRegistrationServ<Registration> ap_serv;
        public RegistrationAuthProvider(IRegistrationServ<Registration> ap_serv)
        {
            this.ap_serv = ap_serv;
        }
        public string GenerateJSONWebToken(Registration admin_info, IConfiguration _config)
        {
            if (admin_info == null)
                return null;
            try
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                    _config["Jwt:Issuer"],
                    null,
                    expires: DateTime.Now.AddMinutes(100),
                    signingCredentials: credentials);

                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception)
            {
                return null;
            }

        }
        public dynamic AuthenticateUser(Registration login)
        {
            if (login == null)
            {
                return null;
            }
            try
            {
                Registration user = null;

                List<Registration> ValidUsers = ap_serv.GetRegistrationCredentials();

                if (ValidUsers == null)
                    return null;
                else
                {
                    if (ValidUsers.Any(u => u.Email == login.Email && u.Password == login.Password))
                    {
                        user = new Registration { Email = login.Email, Password = login.Password };
                    }
                }

                return user;
            }
            catch (Exception)
            {
                return null;
            }

        }
    }
}
