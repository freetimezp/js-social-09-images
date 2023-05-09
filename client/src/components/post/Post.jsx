import React from 'react';
import { useSelector } from 'react-redux';

import './Post.css';

import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = ({ data }) => {
    const { user } = useSelector((state) => state.AuthReducer.authData);

    return (
        <div className='post'>
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="user" className='main-img' />

            <div className="postReact">
                <img src={data.liked ? Heart : NotLike} alt="icon" />
                <img src={Comment} alt="icon" />
                <img src={Share} alt="icon" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: "12px" }}>{data.likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    );
}

export default Post;
