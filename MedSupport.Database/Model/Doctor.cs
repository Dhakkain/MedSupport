using MedSupport.Database.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedSupport.Database.Model
{
    public class Doctor : BaseTableColumn
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        public int AccountUserId { get; set; }

        public virtual AccountUser AccountUser { get; set; }

        public virtual ICollection<Visit> Visits { get; set; }

    }
}
