using System;
using System.Collections.Generic;

#nullable disable

namespace BRegsitrationAPI.BankModel
{
    public partial class Registration
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
