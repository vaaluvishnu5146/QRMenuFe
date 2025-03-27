import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap'
import { useAuth } from '../Context/Authentication.context';
import { useProducts } from '../Context/Products.context';

// name: { type: String, required: true },
//     foodType: { type: String, enum: [ 'veg', 'non-veg' ], default: 'veg' },
//     category: { type: String, enum: [ 'fast-food', 'slow-baked', 'desserts' ], default: 'fast-food' },
//     normalPrice: { type: Number, default: 0 },
//     actualPrice: { type: Number, default: 0 },
//     isAvailable: { type: Boolean, default: false },
//     restaurant: { type: mongoose.Types.ObjectId, ref: RestaurantModel, required: false }

export default function CreateProduct() {
  const { token } = useAuth();
  const { refetchProducts } = useProducts();
  const [formDetails, setFormDetails] = useState({});

  function handleCreateFoodSubmit(e) {
    if(formDetails && formDetails['name']) {
      fetch(`http://localhost:3000/v1/foods/createFood`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({...formDetails, restaurant: token.restaurant}),
      })
      .then((response) => response.json())
      .then((result) => {
        if(result.success) {
          refetchProducts();
          alert(result.message)
        }
      })
      .catch((error) => {
        console.log(error)
      });
    } else {
      alert("Bad Details")
    }
  }

  function handleInputChange(e) {
    if(e.target.type === 'radio') {
      setFormDetails((prevDetails) => {
        return {
          ...prevDetails,
          [e.target.name]: e.target.id
        }
      })
    } else {
      setFormDetails((prevDetails) => {
        return {
          ...prevDetails,
          [e.target.id]: e.target.value
        }
      })
    }
  }

  return (
    <div className='container'>
      <div className='container-fluid py-5'>
        <h3 className='mb-3'>Create A Food</h3>
          <div id='create-food-form'>
            <FormGroup>
              <Label for="name">
                Food name
              </Label>
              <Input
                required
                id="name"
                name="name"
                placeholder="Enter Food name"
                type="text"
                onChange={handleInputChange}
                value={formDetails['name']}
              />
            </FormGroup>
            <FormGroup>
              <Label for="foodType">
                Select Food Type
              </Label>
              <Input
                id="foodType"
                name="foodType"
                type="select"
                onChange={handleInputChange}
                value={formDetails['foodType']}
              >
                <option value={''}>
                  Select any option
                </option>
                <option value={'veg'}>
                  Vegetarian
                </option>
                <option value={'non-veg'}>
                  Non Vegetarian
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="category">
                Select Category
              </Label>
              <Input
                id="category"
                name="category"
                type="select"
                onChange={handleInputChange}
                value={formDetails['category']}
              >
                <option value={''}>
                  Select any option
                </option>
                <option value={'fast-food'}>
                  Fast Food
                </option>
                <option value={'slow-baked'}>
                  Slow Baked
                </option>
                <option value={'desserts'}>
                  Dessert
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="normalPrice">
                Food Normal Price
              </Label>
              <Input
                id="normalPrice"
                name="normalPrice"
                placeholder="Enter Normal Price"
                type="number"
                onChange={handleInputChange}
                value={formDetails['normalPrice']}
              />
            </FormGroup>
            <FormGroup>
              <Label for="actualPrice">
                Food Actual Price
              </Label>
              <Input
                id="actualPrice"
                name="actualPrice"
                placeholder="Enter Actual Price"
                type="number"
                onChange={handleInputChange}
                value={formDetails['actualPrice']}
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>
                Serving Today?
              </legend>
              <FormGroup check>
                <Input
                  name="isAvailable"
                  type="radio"
                  id='yes'
                  onChange={handleInputChange}
                  checked={formDetails["isAvailable"] === 'yes' && true}
                />
                {' '}
                <Label check>
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="isAvailable"
                  type="radio"
                  id='no'
                  onChange={handleInputChange}
                  checked={formDetails["isAvailable"] === 'no' && true}
                />
                {' '}
                <Label check>
                  No
                </Label>
              </FormGroup>
            </FormGroup>
            <div className='d-flex'>
            <Button type='submit' onClick={handleCreateFoodSubmit}>
              Add Product
            </Button>
            <Button type='submit' outline onClick={() => setFormDetails({ })}>
              Reset Form
            </Button>
            </div>
          </div>
      </div>
    </div>
  )
}
