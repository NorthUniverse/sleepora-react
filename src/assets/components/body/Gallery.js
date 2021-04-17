import React from 'react';
import { GalleryItems } from './GalleryItems.js';
import { NavLink } from 'react-router-dom';
import '../../styles/minCss/galleryStyles.css';

import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
    const imagePath = '../../images/gallery/';

    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="mobile-content-header">Gallery</div>                
                    <div className="gallery-items-wrapper">
                        <SRLWrapper>
                        {
                            
                            GalleryItems.map((item, index) => {
                                const imgPath = require('../../images/gallery/' + item.imgName + '.jpg');
                                return(
                                    <div className="gallery-each-item">
                                        <div className="gallery-image-wrapper">
                                            <img src = { imgPath } className="each-image-item" alt={`Gallery Image ` + item.alt}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </SRLWrapper>
                    </div>
            </div>
        </React.Fragment>
    );
}

export default Gallery;