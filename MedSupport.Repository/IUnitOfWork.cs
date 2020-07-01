namespace MedSupport.Repository
{
    public interface IUnitOfWork
    {
        void SaveChanges();

        IRepository<T> Repository<T>() where T : class;
    }
}
