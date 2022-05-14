import React from 'react';
import './Posts.css'

export default function Posts(props) {
    const {details: detail}=props;
  return (
    <div className='slide'>
        <div className='header'>
            <div className='left'>
                <h4>{detail.name}</h4>
                <p>{detail.location}</p>
            </div>
            <div className='right'>
                <p className='dots'>...</p>
            </div>
        </div>
        <div className='image_wrapper'>
            <img className='image' src={detail.PostImage} alt=''/>
        </div>
        <div>
            <div className='footer'>
                <div className='left1'>
                    <img className='icon' src='https://www.pngitem.com/pimgs/m/595-5957528_black-heart-symbol-outline-love-heart-png-transparent.png' alt=''/>
                    <img className='icon' src='https://www.kindpng.com/picc/m/141-1412822_instagram-share-icon-png-png-download-transparent-png.png' alt=''/>
                    <p className='likes'>{detail.likes} likes</p>
                </div>
                <div  className='right1'>
                    <p>{detail.date}</p>
                </div>
            </div>
            <div className='description'>
                <h3>{detail.description}</h3>
            </div>
        </div>
    </div>
  )
}