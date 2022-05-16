import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentRow from '../Components/CommentRow';


const ViewBlog = () => {
    const { id } = useParams();

    const [Title, setTitle] = useState('');
    const [Text, setText] = useState('');
    const [Date, setDate] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [test, setTest] = useState('');

    useEffect(() => {
        async function getBlogPost() {
            const { data } = await axios.get(`/api/BlogPost/GetById?id=${id}`);
            setTitle(data.title);
            setText(data.text);
            setDate(data.dateSubmitted);
            setComments(data.comments);
        }
        getBlogPost();

    }, [test])

    const addComment = async () => {
        const Comment = {
            name,
            text: comment,
            BlogPostId: id
        }
        await axios.post('api/BlogPost/AddComment', Comment);
        setName('');
        setComment('');
        setTest('hi');
    }

    return (
        <div className="col-lg-8">
            <h1 className="mt-4">
                {Title}
            </h1>
            <p className="lead">by: Miriam Munk</p>
            <p>Posted on {Date}</p>
            <hr>
            </hr>
            <p>{Text}</p>
            <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <div className="form-group">
                        <div>
                            <input type="text" placeholder="Please enter your name" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className="form-group mt-2">
                            <textarea placeholder="Type your comment here..." className="form-control" rows="3" onChange={e => setComment(e.target.value)} value={comment} ></textarea>
                        </div>
                        <button disabled={!(name && comment)} className="btn btn-primary" onClick={addComment}>Submit</button>
                    </div>
                </div>
            </div>
            {comments.map((c, k) => <CommentRow comment={c} key={k} />)}
        </div>

    )
}


export default ViewBlog;