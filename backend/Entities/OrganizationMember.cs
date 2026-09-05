using backend.Enums;

namespace backend.Entities;

public class OrganizationMember
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid UserId { get; set; }

    public Guid OrganizationId { get; set; }

    public OrganizationRole Role { get; set; }

    public DateTime JoinedAt { get; set; } = DateTime.UtcNow;

    public User User { get; set; } = null!;

    public Organization Organization { get; set; } = null!;
}