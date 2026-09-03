using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    public DbSet<Organization> Organizations => Set<Organization>();

    public DbSet<OrganizationMember> OrganizationMembers
        => Set<OrganizationMember>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasIndex(user => user.Email)
            .IsUnique();

        modelBuilder.Entity<OrganizationMember>()
            .HasIndex(member => new
            {
                member.UserId,
                member.OrganizationId
            })
            .IsUnique();

        modelBuilder.Entity<OrganizationMember>()
            .Property(member => member.Role)
            .HasConversion<string>();
    }
}