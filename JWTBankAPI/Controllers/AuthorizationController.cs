using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JWTBankAPI.BankModel;
using JWTBankAPI.Provider;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace JWTBankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {

        private IConfiguration config;

        private readonly IRegistrationAuthProvider<Registration> reg_ap;

        public AuthorizationController(IConfiguration config, IRegistrationAuthProvider<Registration> reg_ap)
        {
            this.config = config;
            this.reg_ap = reg_ap;
        }

        [HttpPost]
        [Route("Registration")]
        public IActionResult Login([FromBody] Registration login)
        {
            if (login == null)
            {
                return BadRequest();
            }
            try
            {

                IActionResult response = Unauthorized();
                Registration user = reg_ap.AuthenticateUser(login);

                if (user != null)
                {
                    var tokenString = reg_ap.GenerateJSONWebToken(user, config);
                    response = Ok(tokenString);

                }

                return response;
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }

        }
    }
}
