import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import BlogPage from './Pages/BlogPage';
import Admin from './Pages/AdMin';
import ViewBlog from './Pages/ViewBlog';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={BlogPage} />
                <Route exact path='/viewBlog/:id' component={ViewBlog} />
                <Route exact path='/Admin' component={Admin} />
            </Layout>
        );
    }
}