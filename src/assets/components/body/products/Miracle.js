import React from 'react';
import { CatalogItems } from '../CatalogItems';
import Product from './Product';

function Miracle() {
    let mattressObject = CatalogItems.filter(mattress => mattress.name.includes('Miracle'))[0];
    return <Product mattressObjectProps = { mattressObject }/>;
}

export default Miracle;