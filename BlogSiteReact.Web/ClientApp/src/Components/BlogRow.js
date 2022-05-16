import {  Link } from 'react-router-dom';
//import format from 'date-fns/format'
import React from 'react';


const BlogRow = ({ blogPost }) => {
    const { title, text, dateSubmitted, id, comments } = blogPost;
    return <div className="card mb-4">
        <div className="card-body">
            <Link to={`/viewblog/${id}`} >
                <h2 className="card-title">{title}</h2>
            </Link>
            <p className="card-text">
                {text.Length < 100 ? text : text.substr(0, 100)}
            </p>
            <div className="mb-3">
                <small>{comments.length} comment(s)</small>
            </div>
            <Link to={`/viewblog/${id}`} >
                <button className="btn btn-primary">Read More &rarr;</button>
            </Link>
        </div>
        <div className='card-footer text-muted'>
            posted on {dateSubmitted}
            {/*Posted on {format(new Date(dateSubmitted), 'EEEE LLLL do, R')}*/}
        </div>
    </div>
}

export default BlogRow;