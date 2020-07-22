using MedSupport.Database.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MedSupport.Database.Model
{
    public class Address : BaseTableColumn
    {
        public string City { get; set; }

        public string Street { get; set; }

        [MaxLength(10)]
        public string ZipCode { get; set; }

        [MaxLength(5)]
        public string HouseNumber { get; set; }

        [MaxLength(5)]
        public string FlatNumber { get; set; }
    }
}
