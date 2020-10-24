import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Label, Alert, Row, Col } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import './SignUpStyles.css';

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
                  <div className="signup-container" >
                <div className="container">
          
          <Card className="signup-card">
              <CardBody>
              <Row>
                <Col xs="6" style={{textAlign:"center"}}><Link to="/signup" ><h4>Sign Up</h4>
      </Link>  
      </Col>
      <Col xs="6" style={{textAlign:"center"}}><Link to="/login" ><h4>Log In</h4>
      </Link>  
      </Col>
      </Row>
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
                <Row>
        <Col ><hr class="solid"/></Col>
        <Col style={{minWidth:"160px"}}>Or Connect With</Col>
        <Col ><hr class="solid"/></Col>
      </Row>
              </CardBody>

          </Card>
          </div>
       {/* </div> */}
            </div>
        </>
    )
}

export default SignUpComponent
