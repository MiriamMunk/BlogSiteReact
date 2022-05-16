using System;
using System.Collections.Generic;

namespace ReactBlogSite.data
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime DateSubmitted { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
