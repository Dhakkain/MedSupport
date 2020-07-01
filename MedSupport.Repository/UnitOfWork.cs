using MedSupport.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MedSupport.Repository
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly MedSupportContext context;
        private bool disposed = false;
        public Dictionary<Type, object> repositories = new Dictionary<Type, object>();

        public UnitOfWork()
        {
            this.context = new MedSupportContext();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                    context.Dispose();
            }
            this.disposed = true;
        }

        public IRepository<T> Repository<T>() where T : class
        {
            if (repositories.Keys.Contains(typeof(T)) == true)
            {
                return repositories[typeof(T)] as IRepository<T>;
            }

            IRepository<T> repo = new Repository<T>(context);
            repositories.Add(typeof(T), repo);
            return repo;
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }

        public void Dispose()
        {
            this.context.Dispose();
        }
    }
}
