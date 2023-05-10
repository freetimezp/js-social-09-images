import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ProfileCard.css';

const ProfileCard = ({ location }) => {
    const { user } = useSelector((state) => state.AuthReducer.authData);
    const posts = useSelector((state) => state.PostReducer.posts);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className='profileCard'>
            <div className="profileImages">
                <img
                    src={user.coverPicture
                        ? serverPublic + user.coverPicture
                        : serverPublic + 'cover.jpg'}
                    alt="profile"
                />
                <img
                    src={user.profilePicture
                        ? serverPublic + user.profilePicture
                        : serverPublic + 'defaultProfile.png'}
                    alt="profile"
                />
            </div>
            <div className="profileName">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.workAt ? user.workAt : "Write about yourself.."}</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>{user.following.length}</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>

                    {location === 'profilePage' && (
                        <>
                            <div className="vl">

                            </div>
                            <div className="follow">
                                <span>{posts.length}</span>
                                <span> Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>

            {location === 'profilePage' ? '' : (
                <span className='profileSpan'>
                    <Link to={`/profile/${user._id}`}>
                        My profile
                    </Link>
                </span>
            )}
        </div>
    );
}

export default ProfileCard;
