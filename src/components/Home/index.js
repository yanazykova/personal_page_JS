import { Link } from 'react-router-dom';
import './index.scss';
import Animation from '../Animation';
import React, { useState } from "react";

function Home() {
    const [letterClass] = useState('text-animate')
    // const nameArray = ['Y', 'a', 'n', 'a', '.']


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>Hi</span>
                    {/* <span className={`${letterClass} _12`}>i,</span> */}

                    <br/>
                    <span className={`${letterClass}`}>I'm</span>
                    {/* <span className={`${letterClass} _14`}>'m </span> */}
                    <span className={`${letterClass}`}> Yana </span>


                {/* <Animation letterClass={letterClass}
                strArray={nameArray}
                idx={15}/> */}
                <br />
                </h1>
                <h2>Bilingual Travel, Visas and Publishing Professional</h2>
                <h2>(switching into a career in tech)</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
               
                
            </div>


        </div>
    );
}

export default Home;