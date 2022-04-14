import React from 'react';
import { useNavigate} from "react-router-dom"
import './Landingpage.css'


function Landingpage() {
    let history = useNavigate();
  return (
    <div className='container'>
        <img className='imageP' src='https://cdn.pixabay.com/photo/2021/10/24/21/23/instagram-6739333__340.jpg' alt=''/>
        <div className='text-wrapper'>
            <h5>Instagram Page</h5>
            <button className='button1' onClick={() => {
                history('/Allcomponent');
            } } >Enter</button>
        </div>
    </div>
  )
}
export default Landingpage;