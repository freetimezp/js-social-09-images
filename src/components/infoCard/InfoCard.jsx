import React from 'react';

import './InfoCard.css';

import { UilPen } from '@iconscout/react-unicons';

const InfoCard = () => {
    return (
        <div className='infoCard'>
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen />
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status</b>
                </span>
                <span> in Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in</b>
                </span>
                <span> Ukraine</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at</b>
                </span>
                <span> Web Developing</span>
            </div>

            <button className='button logout-button'>Logout</button>
        </div>
    );
}

export default InfoCard;
