import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

    const navigate = useNavigate();
    const homeNavigate = () => {

        navigate('/');
        console.log("first");
    }

    return (
        <div>
            <h1>Blog</h1>
            <button onClick={homeNavigate} className='btn my-10'>Navigate</button>
        </div>
    );
};

export default Blog;