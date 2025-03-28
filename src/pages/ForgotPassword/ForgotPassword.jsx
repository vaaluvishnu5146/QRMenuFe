import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap'

export default function ForgotPassword() {
  const navigator = useNavigate();
  const emailRef = useRef(null);

  function handleEmailSubmission(e) {
    const email = emailRef.current.value;
    if (email) {
      fetch('http://localhost:3000/v1/auth/forgotpassword', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email }) }).then((response) => {
        if(response.status === 404) {
          alert("Account Doesnt Exists. Signup to Continue...")
          navigator('/')
        }
        if(response.status === 200) {
          navigator(`/verifytoken?email=${email}`)
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      alert('Enter Email to continue...')
    }
  }

  return (
    <div className='container h-100'>
      <div className='container-fluid d-flex align-items-center justify-content-center h-100'>
        <div className='login-form'>
          <h3 className='mb-3'>Forgot Password</h3>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              innerRef={emailRef}
            />
          </FormGroup>
          <Button color='primary' size='large' block onClick={handleEmailSubmission}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}
