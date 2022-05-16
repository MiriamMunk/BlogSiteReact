using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using ReactPeopleCars.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeople.Data
{
    public class BlogPostContextFactory : IDesignTimeDbContextFactory<BlogPostDataContext>
    {
        public BlogPostDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}BlogSiteReact.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new BlogPostDataContext(config.GetConnectionString("ConStr"));
        }
    }
}
