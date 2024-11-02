import React, { useState } from 'react';
import './Contact.style.scss';
import Globe from 'react-globe.gl'; // For the 3D globe

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sending email to backend here
        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => alert('Email sent successfully!'))
        .catch(error => alert('Error sending email'));
    };

    return (
        <div className='contact' id="contact">
            <div className='container'>
                <div className='contact_content'>
                    <div className='contact_title'>
                        <p>contact</p>
                        <h3>Don't be shy! Hit me up! 👇</h3>
                    </div>
                    <div className='section'> 
                        <div className='contact_form'>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                        <div className='globe'>
                            <Globe
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // Night view of Earth
                                backgroundColor="white"
                                animateIn={true}
                                width={550}
                                height={550}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
