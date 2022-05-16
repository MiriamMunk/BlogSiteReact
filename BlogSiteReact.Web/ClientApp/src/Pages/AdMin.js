import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Admin = () => {

    const [Title, setTitle] = useState('');
    const [Text, setText] = useState('');
    let history = useHistory();

    const Submit = async () => {
        const blog = {
            Title,
            Text,
            dateSubmitted: new Date(new Date().toLocaleString()).toISOString()
        }
        const { data } = await axios.post('api/BlogPost/AddBlogPost', blog);
        history.push(`/ViewBlog/${data}`);
    }

    return <div className="jumbotron">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <textarea className="form-control" rows="20" placeholder="What's on your mind?" onChange={e => setText(e.target.value)}></textarea>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <button className="btn btn-primary" onClick={Submit}>Submit post</button>
                </div>
            </div>
        </div>
    </div>
}
export default Admin;