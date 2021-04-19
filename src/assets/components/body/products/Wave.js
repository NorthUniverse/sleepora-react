import React from 'react';
import { CatalogItems } from '../CatalogItems';
import Product from './Product';

function Wave() {
    let mattressObject = CatalogItems.filter(mattress => mattress.name.includes('Wave'))[0];
    return <Product mattressObjectProps = { mattressObject }/>;
}

export default Wave;