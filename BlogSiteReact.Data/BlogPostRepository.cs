using Microsoft.EntityFrameworkCore;
using ReactPeopleCars.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlogSite.data
{
    public class BlogPostRepository
    {
        private readonly string _ConnectionString;
        public BlogPostRepository(string ConString)
        {
            _ConnectionString = ConString;
        }
        public List<BlogPost> GetAll()
        {
            BlogPostDataContext context = new(_ConnectionString);
            return context.BlogPosts.Include(c => c.Comments).ToList();
        }
        public int AddBlogPost(BlogPost b)
        {
            BlogPostDataContext context = new(_ConnectionString);
            context.BlogPosts.Add(b);context.SaveChanges();
            return b.Id;
        }
        public int GetMostRecent ()
        {
            BlogPostDataContext context = new (_ConnectionString);
            return context.BlogPosts.OrderByDescending(d => d.DateSubmitted).FirstOrDefault().Id;
        }
        public BlogPost GetById(int id)
        {
            BlogPostDataContext context = new (_ConnectionString);
            return context.BlogPosts.Include(c => c.Comments).FirstOrDefault(x => x.Id == id);
        }
        public void AddComment(Comment c)
        {
            BlogPostDataContext context = new(_ConnectionString);
            context.Comments.Add(c);
            context.SaveChanges();
        }
        public List<BlogPost> GetPostsOfPage(int pageNum)
        {
            BlogPostDataContext context = new(_ConnectionString);
            return context.BlogPosts.Include(c => c.Comments).OrderByDescending(d => d.DateSubmitted).Skip(pageNum).Take(3).ToList();
        }
    }
}
