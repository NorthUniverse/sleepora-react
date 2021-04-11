import React from 'react';
import aboutImage from '../../images/about.jpg';
import '../../styles/minCss/aboutStyles.css';

function About() {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="body-about-wrapper">
                    <div className="body-about-background-image">
                        <img src={ aboutImage }  alt="about us bed picture"/>
                    </div>
                    <div className="body-about-text">
                        <div className="heading-wrapper">
                            <p>Our Story</p>
                        </div>
                        <div className="p-wrapper">
                            <p>In 1979, Richard started his career as marketing executive in a company manufacturing mattresses. Being a seasoned marketing executive for more than a decade and a half, in 1996, along with his father Steven, he started the business
                                of distribution of mattress of popular brand through a network of dealer’s and his own chain of retail outlets in Bangalore city, it's called <b>“The Mattress Shoppe”</b>. He had a highly successful run till 2019.</p>
                        </div>
                        <div className="p-wrapper">
                            <p>With 40+ years experience, expertise and market goodwill in mattress trade he decided to make quality mattresses for all at an affordable price.</p>
                        </div>
                        <div className="p-wrapper">
                            <p>With this concept partnered by a manufacturing facility at Coimbatore city, he started the brand <b>Sleepora mattresses</b> in 2019. With an experienced skilled team, they make, market and sell valuable, attractive and quality
                                mattresses.
                            </p>
                        </div>
                        <div className="p-wrapper">
                            <p>Sleepora Mattresses are made using locally sourced finest raw materials. And are available in pocketed spring, bonnell spring, polyurethane, memory foam, latex foam, rebonded foam and coir mattressess types. Made with attractive
                                covers in knitted, cotton and poly cotton fabrics to meet your needs</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;