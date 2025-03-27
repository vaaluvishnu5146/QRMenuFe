import React from 'react'
import { Badge, Button, ListGroupItem } from 'reactstrap'

export default function ProductListItem({ product = {} }) {
    return (
        <ListGroupItem
            className='mb-3'
            action
            active={false}
            tag="button"
        >
            <div className='row food-item-row'>
                <div className='col-xs-3 col-xs-3 col-md-2 col-lg-2 food-image-container'>
                    <img className='food-image' src="./foodplaceholder.png" />
                </div>
                <div className='col-xs-7 col-xs-7 col-md-9 col-md-9 food-content-container'>
                    <h4>{product.name}</h4>
                    <div className='row mb-2'>
                        <div className='col-1'>
                            {
                                product.foodType === "veg" ? <img className='food-type' src='./veg.png' /> : <img className='food-type' src='./non-veg.jpg' />
                            }
                        </div>
                        <div className='col-1'>
                            <Badge color="primary">
                                {product.category}
                            </Badge>
                        </div>
                    </div>
                    <p>{product.normalPrice}</p>
                </div>
                <div className='col-xs-2 col-xs-2 col-md-1 col-md-1 d-flex align-items-center'>
                    <Button color='primary'>Add To cart</Button>
                </div>
            </div>
        </ListGroupItem>
    )
}
