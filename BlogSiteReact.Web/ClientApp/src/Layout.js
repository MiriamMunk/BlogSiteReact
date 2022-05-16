import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Layout = (props) => {
    const history = useHistory();
    const resetId = async () => {
        const { data } = await axios.get('/api/blogPost/GetMostRecent');
        history.push(`/viewBlog/${data}`);
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <span className="navbar-brand">React People Cars</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={resetId} className='nav-link text-light'>
                                        Most Recent
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Admin' className='nav-link text-light'>
                                        Admin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;