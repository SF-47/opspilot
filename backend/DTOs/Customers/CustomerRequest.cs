using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.Customers;

public class CreateCustomerRequest
{
    [Required]
    [MaxLength(200)]
    public string Name { get; set; } = string.Empty;

    [EmailAddress]
    [MaxLength(320)]
    public string? Email { get; set; }

    [MaxLength(50)]
    public string? Phone { get; set; }

    [MaxLength(2000)]
    public string? Notes { get; set; }
}