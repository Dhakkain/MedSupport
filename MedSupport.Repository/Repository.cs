using MedSupport.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MedSupport.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly MedSupportContext context;

        IQueryable<T> IRepository<T>.GetAll => throw new NotImplementedException();

        public Repository(MedSupportContext context)
        {
            this.context = context;
        }

        public IQueryable<T> GetAll()
        {
            return this.context.Set<T>().AsNoTracking();
        }

        public T Find(int id)
        {
            return this.context.Set<T>().Find(id);
        }

        public T GetFirst(Func<T, bool> predicate)
        {
            return this.context.Set<T>().FirstOrDefault(predicate);
        }

        public IList<T> GetList(Func<T, bool> predicate = null)
        {
            return this.context.Set<T>().Where(predicate).ToList();
        }
    }
}
