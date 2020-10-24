import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Label, Alert } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {useHistory} from 'react-router-dom';

function SignUpComponent() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")

        }catch{
            setError('Failed to Create an Account')
        }
        setLoading(false)

    }

    return (
        <>
          <Card className="signup-card" style={{paddingTop:"100px"}}>
              <CardBody>
                <h2>Sign Up</h2>
                {error && <Alert color="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <FormGroup id="email" >
                        <Label>
                            Email
                        </Label>
                        <FormControl type="email" ref={emailRef} required />
                    </FormGroup>

                    <FormGroup id="password" >
                        <Label>
                            Password
                        </Label>
                        <FormControl type="password" ref={passwordRef} required />
                    </FormGroup>

                    <FormGroup id="password-confirm" >
                        <Label>
                            Password Confirmation
                        </Label>
                        <FormControl type="password" ref={passwordConfirmRef} required />
                    </FormGroup>
                    <Button disabled={loading} type="submit" >Sign Up</Button>
                </Form>
              </CardBody>

          </Card>
          {/* <div className="singup-div">
              
          </div>   */}
        </>
    )
}

export default SignUpComponent
