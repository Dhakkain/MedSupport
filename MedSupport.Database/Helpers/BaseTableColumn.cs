using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedSupport.Database.Helpers
{
    public class BaseTableColumn
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int ModifyBy { get; set; }
        public DateTime ModifyDate { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
