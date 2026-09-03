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

    public DbSet<Customer> Customers => Set<Customer>();

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

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.Property(customer => customer.Name)
                .HasMaxLength(200)
                .IsRequired();

            entity.Property(customer => customer.Email)
                .HasMaxLength(320);

            entity.Property(customer => customer.Phone)
                .HasMaxLength(50);

            entity.Property(customer => customer.Notes)
                .HasMaxLength(2000);

            entity.HasIndex(customer => customer.OrganizationId);

            entity.HasOne(customer => customer.Organization)
                .WithMany(organization => organization.Customers)
                .HasForeignKey(customer => customer.OrganizationId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}
