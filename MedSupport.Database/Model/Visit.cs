using MedSupport.Database.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedSupport.Database.Model
{
    public class Visit : BaseTableColumn
    {

        public DateTime Date { get; set; }

        public string Comment { get; set; }

        public int PatientId { get; set; }

        public int DoctorId { get; set; }

        public virtual Patient Patient { get; set; }

        public virtual Doctor Doctor { get; set; }


    }
}
