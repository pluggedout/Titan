using Microsoft.EntityFrameworkCore;
using GUI2.Models;

namespace GUI2.Data;

public class MyDbContext : DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)     
    {  

    }
    public DbSet<Notes>? Notes { get; set; }
} 

    
