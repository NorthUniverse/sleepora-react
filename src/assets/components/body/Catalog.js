import React from 'react';
import { CatalogItems } from './CatalogItems.js';
import '../../styles/minCss/catalogStyles.css';

function Catalog() {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="mobile-content-header">Gallery</div>          
                    <div className="catalog-items-wrapper">
                        {
                            CatalogItems.map((item, index) => {
                                const imgPath = require('../../images/catalog/' + item.name + '.jpg');
                                let mattressName = item.name;
                                if(mattressName.includes("-")) {
                                    let mattressArray = mattressName.split("-");
                                    mattressName = mattressArray[0] + " " + mattressArray[1];
                                }
                                return(
                                    <div className="catalog-each-item">
                                        <div className="catalog-image-wrapper">
                                            <img src = { imgPath } alt={ mattressName + ` Mattress`}/>
                                        </div>
                                        <div className="catalog-image-text-wrapper">{mattressName + ` Mattress`}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </React.Fragment>
    );
}

export default Catalog;