import React from 'react';
import { CatalogItems } from '../CatalogItems';
import Product from './Product';

function Revital() {
    let mattressObject = CatalogItems.filter( mattress => mattress.name.includes('Revital'))[0];
    return <Product mattressObjectProps = { mattressObject }/>;
}

export default Revital;