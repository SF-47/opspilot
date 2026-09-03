namespace backend.Entities;

public class Organization
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string Name { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<OrganizationMember> Members { get; set; }
        = new List<OrganizationMember>();

    public ICollection<Customer> Customers { get; set; }
        = new List<Customer>();
}
