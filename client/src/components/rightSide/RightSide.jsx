import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './RightSide.css';

import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';

import { UilSetting } from '@iconscout/react-unicons';
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className='rightSide'>
            <div className="navIcons">
                <Link to={'../home'}>
                    <img src={Home} alt="icon" />
                </Link>
                <UilSetting />
                <img src={Noti} alt="icon" />
                <img src={Comment} alt="icon" />
            </div>

            <TrendCard />

            <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>

            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
    );
}

export default RightSide;
