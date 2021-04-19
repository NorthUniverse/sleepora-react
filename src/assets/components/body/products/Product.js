import React from 'react';
import { CatalogItems } from '../CatalogItems';
import { useLocation } from "react-router-dom";

function Product(props) {
    return (
        <React.Fragment>
            <div className="content-wrapper">{props.mattressObjectProps.name + ` ` + props.mattressObjectProps.typeName}</div>
        </React.Fragment>
    );
}

export default Product;