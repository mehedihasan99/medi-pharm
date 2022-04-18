import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className="container blogs-container mt-5">
                <div className='blog'>
                    <h5>authorization vs authentication</h5>
                    <h6>Authentication</h6>
                    <ul>
                        <li>telling the system who you are
                            by providing username and password.</li>
                        <li>authentication, ensures the user identity</li>
                    </ul>
                    <h5>Authorization</h5>
                    <ul>
                        <li> authorization, which
                            allows the user to access the various resources
                            based on the user's identity.</li>
                    </ul>
                </div>
                <div className='blog'>
                    <h5>Why are you using firebase?</h5>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <h5>What other options do you have to implement authentication?</h5>
                    <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='blog'>
                    <h5>What other services does firebase provide other than authentication</h5>
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;