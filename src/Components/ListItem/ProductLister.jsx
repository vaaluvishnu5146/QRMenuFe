import React from 'react'
import { ListGroup } from 'reactstrap'
import ProductListItem from './ProductListItem'

export default function ProductLister({ data = [] }) {
    return (
        <ListGroup>
            {
                data.map((_d, index) => <ProductListItem key={`${_d.name}-${index}`} product={_d} />)
            }
        </ListGroup>
    )
}
