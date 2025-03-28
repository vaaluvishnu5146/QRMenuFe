import React, { useRef } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router-dom';



export default function SetNewPassword() {
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigator = useNavigate();


  function handlePasswordChange(e) {
    navigator('/')
  }

  return (
    <div className='container h-100'>
      <div className='container-fluid d-flex align-items-center justify-content-center h-100'>
        <div className='login-form'>
          <h3 className='mb-3'>Create New Password</h3>
          <FormGroup>
            <Label for="email">
              New Password
            </Label>
            <Input
              id="new"
              name="new"
              placeholder="Enter your Password"
              type="password"
              innerRef={newPasswordRef}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              Confirm Password
            </Label>
            <Input
              id="confirm"
              name="confirm"
              placeholder="Enter your Password"
              type="password"
              innerRef={confirmPasswordRef}
            />
          </FormGroup>
          <Button color='primary' size='large' block onClick={handlePasswordChange}>
            Set Password
          </Button>
        </div>
      </div>
    </div>
  )
}
