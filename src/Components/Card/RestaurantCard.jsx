import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'

export default function RestaurantCard({ data }) {
    return (
        <Card>
            <CardBody className="row">
                <div className='col-1'>
                    <img
                        width={100}
                        alt="Sample"
                        src="./placeholder-restaurant.png"
                    />
                </div>
                <div className='col-11'>
                    <CardTitle tag="h5">
                        <Link to={`/restaurant/${data._id}`}><p style={{ color: "black" }}>{data.name}</p></Link>
                    </CardTitle>
                </div>
            </CardBody>
        </Card>
    )
}
