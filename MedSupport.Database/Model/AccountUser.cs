using MedSupport.Database.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MedSupport.Database.Model
{
    public class AccountUser : BaseTableColumn
    {
        public string UserName { get; set; }

        [MaxLength(255)]
        public string Email { get; set; }

        public UserTypeEnum UserType { get; set; }
        public virtual ICollection<Doctor> Doctors { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }

    }
}
