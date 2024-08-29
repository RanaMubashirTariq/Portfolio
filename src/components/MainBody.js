import React from 'react';
import mainBody from './mainBody.css'
import { useState } from 'react';


export default function MainBody() {

            const [profilePic, setProfilePic] = useState(null);
            const [preview, setPreview] = useState(null);

            const [name,setName] = useState('');
            const [email,setEmail] = useState('');
            const [password,setPassword] = useState('');

            const handleImageChange = (event) => {
              const file = event.target.files[0];
              if (file) {
                setProfilePic(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                  setPreview(reader.result);
                };
                reader.readAsDataURL(file);
              }
            };

  return (
            <div className="main-container">
            <div className="Sidebar">
              <div className='heading'>
              <h2>Profile</h2>
              </div>
              <div className="s1">
                <ul className="list">
                  <h3>Setting</h3>
                  <li><i class="fa-solid fa-user-plus"/>Account Setting</li>
                  <li><i className="fa-solid fa-message" />Live Activity setting</li>
                  <h3>Support</h3>
                  <li><i className="fa-solid fa-headphones" />Help Center</li>
                  <li><i className="fa-solid fa-question" />FAQS</li>
                  <h3>About</h3>
                  <li><i class="fa-solid fa-user-minus"/>Delete Account</li>
                </ul>
              </div>
            </div>
            <div className="body">
              <h1>Account Setting</h1>
              <div className="card">
                <div className="left">
                <div className="pic2">
                      {preview ? <img src={preview} alt="Profile Preview" className="profile-pic-preview" /> : ''}
                      <input  type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none',}}  id="profilePicInput" />
                    </div>
                    <button onClick={() => document.getElementById('profilePicInput').click()}>
                      Change Profile Photo
                    </button>
                    </div>
                <div className="right-inputs">
                  <div className="field">
                    <label htmlFor>Full Name</label><br /> 
                    <div className='row'>
                    <input type="text" placeholder="Enter You Full Name" onChange={(e)=>setName(e.target.value)} /><div className='field-icon'><i className="fa-regular fa-user" /></div>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor>Email</label><br />
                    <div className='row'>
                    <input type="email" placeholder="Enter You Email" onChange={(e)=>setEmail(e.target.value)} /><div className='field-icon'><i className="fa-regular fa-envelope" /></div>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor>Password</label><br />
                    <div className='row'>
                    <input type="password" placeholder="Enter You Password" onChange={(e)=>setPassword(e.target.value)}/><div className='field-icon'><i className="fa-regular fa-eye-slash" /></div>
                    </div>
                  </div>
                  <ul className="link">
                    <li><a href="#">Went to change Your Password?</a></li>
                  </ul>
                  <button>Updates Changes</button>
                </div>
              </div>
            </div>
          </div>
  )
}