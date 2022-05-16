import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogRow from '../Components/BlogRow';

const BlogPage = () => {
    const [Blogs, setBlogs] = useState([]);
    const [PageNum, setPage] = useState('0');
    const [PageBlogs, setPageBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get('/api/BlogPost/getall');
            setBlogs(data);
        }
        getBlogs();
    }, []);

    useEffect(() => {
        const getBlogs = async () => {
            const { data } = await axios.get(`/api/BlogPost/getPostsOfPage?pageNum=${PageNum}`);
            setPageBlogs(data);
        }
        getBlogs();
    }, [PageNum]);

    const onOlderClick = () => {
        setPage(PageNum - 3);
    }
    const onNewerClick = () => {
        setPage(+PageNum + 3);
    }
    return (
        <div className="container">
            {PageBlogs.map((b, k) => <BlogRow blogPost={b} key={k} />)}
            <ul className="pagination justify-content-center mb-4">
                {PageNum > 1 &&
                    <li className="page-item">
                        <button className="page-link" onClick={onOlderClick}>&larr; Newer </button>
                    </li>}
                {PageNum <= Blogs.length-4 &&
                    <li className="page-item">
                        <button className="page-link" onClick={onNewerClick}>Older &rarr;</button>
                    </li>}
            </ul>
        </div>)
}

export default BlogPage;
