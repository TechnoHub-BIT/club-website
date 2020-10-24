import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Alert,  Row, Col } from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import './LogInStyles.css'

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
          <div className="login-container" >
                <div className="container">
          
       
                <Card className="login-card" >
                       
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

                        <FormControl type="email" ref={emailRef} placeholder="Enter Your Email" required />
                    </FormGroup>

                    <FormGroup id="password" >

                        <FormControl type="password" ref={passwordRef} placeholder="Enter Your Password" required />
                    </FormGroup>

                    <Button disabled={loading} type="submit" >Log In</Button>
                </Form>
                <Row>
        <Col ><hr class="solid"/></Col>
        <Col style={{minWidth:"160px"}}>Or Connect With</Col>
        <Col ><hr class="solid"/></Col>
      </Row>
              </CardBody>

                          {/* </Row> */}

       </Card>
       </div>
       {/* </div> */}
            </div>
        </>
    )
}

export default LogInComponent
