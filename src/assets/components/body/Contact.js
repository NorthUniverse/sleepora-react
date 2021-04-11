import React from 'react';
import contactImage from '../../images/contact.jpg';
import mobileContactImage from '../../images/mobile-contact.jpg';
import '../../styles/minCss/contactStyles.css';

function Contact() {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="body-contact-wrapper">
                    <div className="body-contact-background-image">
                        <img src={ contactImage } alt="bed picture"/>
                    </div>
                    <div className="body-contact-background-image-mobile">
                        <img src={ mobileContactImage } alt="bed picture mobile"/>
                    </div>
                    <div className="body-contact-text">
                        <div className="heading-wrapper">
                            <p>The Mattress Shoppe</p>
                        </div>
                        <div className="p-wrapper">
                            <p>#24, Ground floor, 5th main road, 18th Cross,<br/> BTM Layout 2nd Stage, N.S.Palya,<br/> Bangalore, 560 076, INDIA</p>
                        </div>
                        <div className="heading-wrapper">
                            <p>Email</p>
                        </div>
                        <div className="p-wrapper">
                            <p>mattressshoppe@rediffmail.com</p>
                        </div>
                        <div className="heading-wrapper">
                            <p>Phone Number</p>
                        </div>
                        <div className="p-wrapper">
                            <p>080-26784104 / 05</p>
                        </div>
                        <div className="heading-wrapper">
                            <p>Store Hours</p>
                        </div>
                        <div className="p-wrapper">
                            <p>Monday - Friday : 9am to 7pm<br/>Saturday : 10am to 5pm<br/>Sunday : Closed</p>
                        </div>
                        <div className="heading-wrapper">
                            <p>Note: Store hours may vary due to Covid-19 pandemic</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;