using backend.DTOs.Customers;
using backend.Services.Customers;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/customers")]
public class CustomersController : ControllerBase
{
    private readonly ICustomerService _customerService;

    public CustomersController(ICustomerService customerService)
    {
        _customerService = customerService;
    }

    [HttpGet]
    public async Task<ActionResult<List<CustomerResponse>>> GetAll([FromQuery] Guid organizationId)
    {
        var customers = await _customerService.GetAllAsync(organizationId);

        return Ok(customers);
    }

    [HttpGet("{customerId:guid}")]
    public async Task<ActionResult<CustomerResponse>> GetById(
        Guid customerId,
        [FromQuery] Guid organizationId
    )
    {
        var customer = await _customerService.GetByIdAsync(organizationId, customerId);
        if (customer is null)
        {
            return NotFound();
        }

        return Ok(customer);
    }

    [HttpPost]
    public async Task<ActionResult<CustomerResponse>> Create([FromQuery] Guid organizationId, CreateCustomerRequest request)
    {
        var customer = await _customerService.CreateAsync(organizationId, request);

        return CreatedAtAction(nameof(GetById), new
        {
            customerId = customer.Id,
            organizationId
        }, customer);
    }

}