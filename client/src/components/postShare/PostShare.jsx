import React, { useState, useRef } from 'react';

import './PostShare.css';

import ProfileImage from '../../img/profileImg.jpg';

import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';

const PostShare = () => {
    const loading = useSelector((state) => state.PostReducer.uploading);
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const descRef = useRef();
    const { user } = useSelector((state) => state.AuthReducer.authData);
    const dispatch = useDispatch();
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    };

    const handleUpload = (event) => {
        event.preventDefault();
        //console.log(user);

        //create post for upload, collect data
        const newPost = {
            userId: user._id,
            desc: descRef.current.value,
        }

        if (image) {
            const data = new FormData();
            const filename = Date.now() + "_" + image.name;
            data.append("name", filename);
            data.append("file", image);
            newPost.image = filename;
            //console.log(newPost);

            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log("Post share image error!");
                //console.log(error);
            }
        }

        dispatch(uploadPost(newPost));
        reset();
    };

    const reset = () => {
        setImage(null);
        descRef.current.value = "";
    }

    return (
        <div className='postShare'>
            <img src={user.profilePicture
                ? serverPublic + user.profilePicture
                : serverPublic + 'defaultProfile.png'}
                alt="profile"
                className='postImg'
            />

            <div className='input-wrapper'>
                <input type="text" placeholder="What's happening?" ref={descRef} required />
                <div className="postOptions">
                    <div
                        className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Shedule
                    </div>
                    <button
                        className="button ps-button"
                        onClick={handleUpload}
                        disabled={loading}
                    >
                        {loading ? "Uploading.." : "Share"}
                    </button>

                    <div style={{ display: "none" }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>

                {image && (
                    <div className='previewImage'>
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="selected" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostShare;
