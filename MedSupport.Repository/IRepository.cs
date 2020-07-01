using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MedSupport.Repository
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetAll { get; }
        T GetFirst(Func<T, bool> predicate);
        IList<T> GetList(Func<T, bool> predicate = null);
        T Find(int id);
    }
}
