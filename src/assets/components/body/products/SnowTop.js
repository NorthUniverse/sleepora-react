import React from 'react';
import { CatalogItems } from '../CatalogItems';
import Product from './Product';

function SnowTop() {
    let mattressObject = CatalogItems.filter(mattress => mattress.name.includes('Snow-Top'))[0];
    return <Product mattressObjectProps = { mattressObject }/>;
}

export default SnowTop;