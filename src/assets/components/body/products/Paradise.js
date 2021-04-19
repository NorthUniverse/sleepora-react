import React from 'react';
import { CatalogItems } from '../CatalogItems';
import Product from './Product';

function Paradise() {
    let mattressObject = CatalogItems.filter( mattress => mattress.name.includes('Paradise'))[0];
    return <Product mattressObjectProps = { mattressObject }/>;
}

export default Paradise;