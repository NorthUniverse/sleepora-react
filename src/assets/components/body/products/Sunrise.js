import React from 'react';
import { CatalogItems } from '../CatalogItems';
import Product from './Product';

function Sunrise() {
    let mattressObject = CatalogItems.filter( mattress => mattress.name.includes('Sunrise'))[0];
    return <Product mattressObjectProps = { mattressObject }/>;
}

export default Sunrise;