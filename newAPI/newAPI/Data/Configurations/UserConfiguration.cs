using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using newAPI.Model;

namespace newAPI.Data.Configurations 
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");
            builder.Property(f => f.Id).HasColumnType("VARCHAR(80)").IsRequired();
            builder.Property(f => f.NameUser).HasColumnType("VARCHAR(80)").IsRequired();
            builder.Property(f => f.Surname).HasColumnType("VARCHAR(80)").IsRequired();
            builder.Property(f => f.Email).HasColumnType("VARCHAR(30)").IsRequired();
            builder.Property(f => f.Passport).HasColumnType("VARCHAR(80)").IsRequired();
            builder.Property(f => f.Phone).HasColumnType("VARCHAR(15)").IsRequired();
            builder.Property(f => f.Birthday).HasColumnType("VARCHAR(12)").IsRequired();
        }
    }
}
