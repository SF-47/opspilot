using backend.DTOs.Customers;

namespace backend.Services.Customers;

public interface ICustomerService
{
    Task<List<CustomerResponse>> GetAllAsync(Guid organizationId);
    Task<CustomerResponse?> GetByIdAsync(Guid organizationId, Guid customerId);
    Task<CustomerResponse> CreateAsync(Guid organizationId, CreateCustomerRequest request);
}