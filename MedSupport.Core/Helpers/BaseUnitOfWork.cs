using MedSupport.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedSupport.Core.Helpers
{
    public class BaseUnitOfWork
    {
        private readonly IUnitOfWork unitOfWork;

        public BaseUnitOfWork(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
    }
}
