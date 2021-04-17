import React from 'react';
import { GalleryItems } from './GalleryItems.js';
import '../../styles/minCss/galleryStyles.css';
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="mobile-content-header">Gallery</div>
                    <SRLWrapper>                
                        <div className="gallery-items-wrapper">
                            {
                                GalleryItems.map((item, index) => {
                                    const imgPath = require('../../images/gallery/' + item.imgName + '.jpg');
                                    return(
                                        <div className="gallery-each-item">
                                            <div className="gallery-image-wrapper">
                                                <img src = { imgPath } alt={ item.alt + ` Gallery Image`}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </SRLWrapper>
            </div>
        </React.Fragment>
    );
}

export default Gallery;