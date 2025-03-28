import React, { useRef } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import { useNavigate, useSearchParams } from 'react-router-dom';


export default function VerifyToken() {
  const tokenRef = useRef(null);
  const navigator = useNavigate();
  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get("email");

  function handleTokenVerification(e) {
    // navigator('/createNewPassword')
    // if(/)
    const tokenTyped = tokenRef.current.value;

      if(!tokenTyped) {
        alert("Token is invalid")
      }

      if(!userEmail) {
        alert('Sorry Try again later')
        navigator('/')
      }

      if(tokenTyped && userEmail) {
        fetch(`http://localhost:3000/v1/auth/verifyToken?email=${userEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: tokenTyped
          })
        }).then((response) => {
          console.log(response)
          if(response.status === 400) {
            alert("Token verification failed")
            navigator('/')
          } else {
            alert("Token verification successfull")
            navigator(`/createNewPassword?email=${userEmail}`)
          }
        }).catch((err) => {
          console.log(err)
        })
      }

  }

  return (
    <div className='container h-100'>
      <div className='container-fluid d-flex align-items-center justify-content-center h-100'>
        <div className='login-form'>
          <h3 className='mb-3'>Verify Token</h3>
          <FormGroup>
            <Label for="email">
              Token
            </Label>
            <Input
              id="Token"
              name="Token"
              placeholder="Enter your Token"
              type="text"
              innerRef={tokenRef}
            />
          </FormGroup>
          <Button color='primary' size='large' block onClick={handleTokenVerification}>
            Verify
          </Button>
        </div>
      </div>
    </div>
  )
}
