using MedSupport.Database.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MedSupport.Database.Model
{
    public class Patient : BaseTableColumn
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        [MaxLength(12)]
        public string PhoneNumber { get; set; }

        [MaxLength(11)]
        public string PersonalIdentity  { get; set; }

        public int AccountUserId { get; set; }

        public virtual AccountUser AccountUser { get; set; }

        public virtual ICollection<Visit> Visits { get; set; }

    }
}
