import React from 'react';

import './ProfileCard.css';

import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.gif';

const ProfileCard = () => {
    const ProfilePage = true;

    return (
        <div className='profileCard'>
            <div className="profileImages">
                <img src={Cover} alt="profile" />
                <img src={Profile} alt="profile" />
            </div>
            <div className="profileName">
                <span>Awesome Web</span>
                <span>Front-end UI/UX Designer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,890</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>7</span>
                        <span>Followers</span>
                    </div>

                    {ProfilePage && (
                        <>
                            <div className="vl">

                            </div>
                            <div className="follow">
                                <span>3</span>
                                <span> Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>

            {ProfilePage ? '' : (
                <span className='profileSpan'>
                    My profile
                </span>
            )}
        </div>
    );
}

export default ProfileCard;
