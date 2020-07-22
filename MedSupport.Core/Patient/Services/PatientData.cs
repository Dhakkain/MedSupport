using MedSupport.Core.Helpers;
using MedSupport.Repository;

namespace MedSupport.Core.Patient.Services
{
    public class PatientData : BaseUnitOfWork, IPatientData
    {
        public PatientData(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public bool ChangeState()
        {
            return true;
        }
    }
}