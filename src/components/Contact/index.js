import Animation from '../Animation'
import './index.scss'
import emailjs from '@emailjs/browser'
import React, {useRef} from 'react'

function Contact() {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_85sye19', 
                'template_ysqmt4c', 
                refForm.current, 
                '3h2dTVUe7vledRbNz'
                ) 
            .then(
            () => {
                alert('Message sent succesfully!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again!')
            }
        )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                <h1 className='contact_h1'>
                    <Animation 
                    string={"Contact me"}
                    />
                </h1>   
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li>
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li>
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form> 
                </div>
            </div>
            </div>
        </>
    )
}

export default Contact