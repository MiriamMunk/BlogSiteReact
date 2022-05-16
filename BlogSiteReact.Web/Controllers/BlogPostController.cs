using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactBlogSite.data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlogSite.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {
        private readonly string _ConnString;
        public BlogPostController(IConfiguration con)
        {
            _ConnString = con.GetConnectionString("ConStr");
        }

        [Route("getall")]
        [HttpGet]
        public List<BlogPost> GetAll()
        {
            var repo = new BlogPostRepository(_ConnString);
            return repo.GetAll();
        }
        [Route("AddBlogPost")]
        [HttpPost]
        public int AddBlogPost(BlogPost b)
        {
            var repo = new BlogPostRepository(_ConnString);
            return repo.AddBlogPost(b);
        }
        [Route("getMostRecent")]
        [HttpGet]
        public int GetMostRecent()
        {
            var repo = new BlogPostRepository(_ConnString);
            return repo.GetMostRecent();
        }

        [Route("GetById")]
        [HttpGet]
        public BlogPost GetById(int id)
        {
            var repo = new BlogPostRepository(_ConnString);
            return repo.GetById(id);
        }

        [Route("AddComment")]
        [HttpPost]
        public void AddComment(Comment c)
        {
            c.DateSubmitted = DateTime.Now;
            var repo = new BlogPostRepository(_ConnString);
            repo.AddComment(c);
        }

        [Route("getPostsOfPage")]
        [HttpGet]
        public List<BlogPost> GetPostsOfPage(int pageNum)
        {
            var repo = new BlogPostRepository(_ConnString);
            return repo.GetPostsOfPage(pageNum);
        }
    }
}
