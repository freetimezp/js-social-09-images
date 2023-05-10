import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/UserAction';

const User = ({ person }) => {
    //console.log(person);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.AuthReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id));

    console.log(following)

    const handleFollow = () => {
        following
            ? dispatch(unfollowUser(person._id, user))
            : dispatch(followUser(person._id, user));

        setFollowing((prev) => !prev);
    };

    return (
        <div className='follower'>
            <div className='item'>
                <img
                    src={person.profilePicture
                        ? process.env.REACT_APP_PUBLIC_FOLDER + person.profilePicture
                        : process.env.REACT_APP_PUBLIC_FOLDER + 'defaultProfile.png'}
                    alt="follower"
                    className='followerImg' />
                <div className="name">
                    <span>{person.firstname}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            <button className='button fc-button' onClick={handleFollow}>
                {following ? "Unfollow" : "Follow"}
            </button>
        </div>
    );
};

export default User;
