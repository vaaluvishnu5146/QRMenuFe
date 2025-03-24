import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import { useAuth } from '../Context/Authentication.context';
export default function Login() {
  const { setLoggedIn } = useAuth();
  const navigator = useNavigate();
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  async function handleLogin(e) {
    e.preventDefault();

    const credentials = { email: emailRef.current.value, password: passwordRef.current.value };

    if(!credentials.email || !credentials.password) {
      alert("Bad crdentials")
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/v1/auth/signin', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(credentials) });
      const result = await response.json();

      if(result.success) {
        window.localStorage.setItem("_tk", result._tk)
        setLoggedIn(true)
        navigator('/shop')
      } else {
        alert('login failed')
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='container h-100'>
      <div className='container-fluid d-flex align-items-center justify-content-center h-100'>
        <div className='login-form'>
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
          <FormGroup>
            <Label for="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="**********"
              type="password"
              innerRef={passwordRef}
            />
          </FormGroup>
          <Button color='primary' size='large' block onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
