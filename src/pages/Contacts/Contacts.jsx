import React from 'react';
import Slider from "../../components/Slider/Slider";
import './Contacts.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_tn75lu5', 'template_60g0hph', form.current, {
                publicKey: 'vDFW0DQXaDWypu6Lf',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="pages">
            <Slider />
            <div className='main_content'>
                <h1 className='contacts_content'>
                    <p>My phone: +46 702 316 69 7</p>
                    <p>For general or work inquiries please contact me at promo@gmail.com or via form below.</p>
                </h1>
                <form className='contact_form' ref={form} onSubmit={sendEmail}>
                    <label>Your Name</label>
                    <input type="text" name="user_name" />
                    <label>Your Email</label>
                    <input type="email" name="user_email" />
                    <label>Your Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}

export default Contacts;