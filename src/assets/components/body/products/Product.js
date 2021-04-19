import React from 'react';
import '../../../styles/minCss/productStyles.css';

function Product(props) {
    let mattressObject = props.mattressObjectProps;
    const imgPath = require('../../../images/catalog/' + mattressObject.name + '.jpg');
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="body-product">
                    <div className="body-product-image">
                        <img src={ imgPath } alt={ mattressObject.name + " mattress picture"}/>
                    </div>
                    <div className="body-product-details">
                        <div className="product-name">{ mattressObject.name + ` ` + mattressObject.typeName }</div>
                        <ul className="product-details-content">
                            {
                                mattressObject.description.map((item, index) => 
                                    {
                                        return (
                                            <li>{item}</li>
                                        ) 
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Product;