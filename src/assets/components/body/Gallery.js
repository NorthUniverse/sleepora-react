import React from 'react';
import { GalleryItems } from './GalleryItems.js';
import { NavLink } from 'react-router-dom';
import '../../styles/minCss/galleryStyles.css';

function Gallery() {
    const imagePath = '../../images/gallery/';
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="mobile-content-header">Gallery</div>                
                    <div className="gallery-items-wrapper">
                        {
                            GalleryItems.map((item, index) => {
                                const imgPath = require('../../images/gallery/' + item.imgName + '.jpg');
                                return(
                                    <div className="gallery-each-item">
                                        <NavLink exact to={ imgPath } className="gallery-image-wrapper">
                                            <img src = { imgPath } alt={item.alt + ` mattress picture`}/>
                                        </NavLink>
                                        <NavLink  exact to={ imgPath } className="gallery-image-text-wrapper">
                                            Click here to enlarge
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </React.Fragment>
    );
}

export default Gallery;