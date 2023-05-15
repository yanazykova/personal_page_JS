import './index.scss'
import Animation from '../Animation'


function About () {

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <Animation
                    string={'About me'}
                    />
                </h1>
                <div>
                <p>
                I am an experienced professional with a demonstrated history of working in: 
                </p>
                <ul>
                    <li>publishing production management,</li> 
                    <li>visa and travel industry,</li>
                    <li>Russian-English translation and editing,</li>
                    <li>museum collections, historical research and interviewing.</li>
                </ul>
                <p>I am a hard-working person with a growth mindset and a natural curiosity and passion to work in a progressive and forward moving industry. My logical and analytical approach to problem solving and focus on delivering solutions with a user-centric approach means I am committed to the best outcomes for end users. I invest in my continuous development and learning.</p>
                </div>
            </div>

        </div>
    )
}

export default About