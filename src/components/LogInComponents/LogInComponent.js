import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Label, Alert } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {useHistory} from 'react-router-dom';

function LogInComponent() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()


        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            setError('Failed to Login')
        }
        setLoading(false)

    }

    return (
        <>
          <Card className="signup-card" style={{paddingTop:"100px"}}>
              <CardBody>
                <h2>Log In</h2>
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

                    <Button disabled={loading} type="submit" >Log In</Button>
                </Form>
              </CardBody>

          </Card>
          {/* <div className="singup-div">
              
          </div>   */}
        </>
    )
}

export default LogInComponent
