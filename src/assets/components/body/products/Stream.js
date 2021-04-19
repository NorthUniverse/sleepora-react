import React from 'react';
import { CatalogItems } from '../CatalogItems';
import Product from './Product';

function Stream() {
    let mattressObject = CatalogItems.filter( mattress => mattress.name.includes('Stream'))[0];
    return <Product mattressObjectProps = { mattressObject }/>;
}

export default Stream;