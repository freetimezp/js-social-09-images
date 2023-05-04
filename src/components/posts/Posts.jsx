import React from 'react';

import './Posts.css';

import Post from '../post/Post';
import { PostsData } from '../../Data/PostsData';

const Posts = () => {
    return (
        <div className='posts'>
            {PostsData.map((post, id) => (
                <Post key={id} data={post} id={id} />
            ))}
        </div>
    );
}

export default Posts;
