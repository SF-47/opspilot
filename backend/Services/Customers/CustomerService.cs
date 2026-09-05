using backend.Data;
using backend.DTOs.Customers;
using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services.Customers;



public class CustomerService : ICustomerService
{
    private readonly AppDbContext _db;

    public CustomerService(AppDbContext db)
    {
        _db = db;
    }

    private static string? CleanOptional(string? value)
    {
        return string.IsNullOrWhiteSpace(value)
            ? null
            : value.Trim();
    }

    public async Task<List<CustomerResponse>> GetAllAsync(Guid organizationId)
    {
        return await _db.Customers
        .Where(customer => customer.OrganizationId == organizationId)
        .OrderBy(customer => customer.Name)
        .Select(customer => new CustomerResponse
        {
            Id = customer.Id,
            Name = customer.Name,
            Email = customer.Email,
            Phone = customer.Phone,
            Notes = customer.Notes,
            CreatedAt = customer.CreatedAt
        }).ToListAsync();
    }

    public async Task<CustomerResponse?> GetByIdAsync(Guid organizationId, Guid customerId)
    {
        return await _db.Customers
        .Where(customer => customer.Id == customerId && customer.OrganizationId == organizationId)
        .Select(customer => new CustomerResponse
        {
            Id = customer.Id,
            Name = customer.Name,
            Email = customer.Email,
            Phone = customer.Phone,
            Notes = customer.Notes,
            CreatedAt = customer.CreatedAt

        }).FirstOrDefaultAsync();
    }

    public async Task<CustomerResponse> CreateAsync(Guid organizationId, CreateCustomerRequest request)
    {
        var customer = new Customer
        {
            Id = Guid.NewGuid(),
            OrganizationId = organizationId,
            Name = request.Name.Trim(),
            Email = CleanOptional(request.Email),
            Phone = CleanOptional(request.Phone),
            Notes = CleanOptional(request.Notes),
            CreatedAt = DateTime.UtcNow
        };

        _db.Customers.Add(customer);

        await _db.SaveChangesAsync();
        return new CustomerResponse
        {
            Id = customer.Id,
            Name = customer.Name,
            Email = customer.Email,
            Phone = customer.Phone,
            Notes = customer.Notes,
            CreatedAt = customer.CreatedAt
        };
    }
}