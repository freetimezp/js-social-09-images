import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './Posts.css';

import Post from '../post/Post';
import { getTimelinePosts } from '../../actions/PostAction';

const Posts = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.AuthReducer.authData);
    let { posts, loading } = useSelector((state) => state.PostReducer);
    const params = useParams();

    console.log(loading);

    useEffect(() => {
        dispatch(getTimelinePosts(user._id));
    }, []);

    if (!posts) {
        return "No posts";
    }

    if (params.id) {
        posts = posts.filter((post) => post.userId === params.id);
    }

    return (
        <div className='posts'>
            {loading ? "Loading posts..." : posts.map((post, id) => (
                <Post key={id} data={post} id={id} />
            ))}
        </div>
    );
}

export default Posts;
