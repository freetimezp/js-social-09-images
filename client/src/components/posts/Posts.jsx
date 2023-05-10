import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Posts.css';

import Post from '../post/Post';
import { getTimelinePosts } from '../../actions/PostAction';

const Posts = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.AuthReducer.authData);
    const { posts, loading } = useSelector((state) => state.PostReducer);

    useEffect(() => {
        dispatch(getTimelinePosts(user._id));
    }, []);

    return (
        <div className='posts'>
            {loading ? "Loading posts..." : posts?.map((post, id) => (
                <Post key={id} data={post} id={id} />
            ))}
        </div>
    );
}

export default Posts;
