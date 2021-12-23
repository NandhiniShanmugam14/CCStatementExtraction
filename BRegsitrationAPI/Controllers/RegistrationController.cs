using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BRegsitrationAPI.BankModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BRegsitrationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly BankCCContext db;

        public RegistrationController(BankCCContext _db)
        {
            db = _db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await db.Registrations.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(Registration r)
        {
            db.Registrations.Add(r);
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(int id, Registration r)
        {
            db.Entry(r).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteUser(int id)
        {
            Registration r = db.Registrations.Find(id);
            db.Registrations.Remove(r);
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Registration>> GetById(int id)
        {
            Registration c = await db.Registrations.FindAsync(id);
            return Ok(c);
        }
    }
}
