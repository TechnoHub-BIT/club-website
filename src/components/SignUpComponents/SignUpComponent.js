import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Alert,  Nav, NavItem, NavLink, Row, Label,Col} from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import classnames from 'classnames';
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

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
                  <div className="signup-container" >
                <div className="container">
          
          <Card className="signup-card">
              <CardBody>
              <Nav tabs className="nav-fill">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            href="/signup"
          >
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })} 
            href="/login"
            onClick={() => { toggle('2'); }}
          >
            Log In
          </NavLink>
        </NavItem>
      </Nav>
                {error && <Alert color="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit} className="signup-form" >
                    <FormGroup id="email" >
                        <FormControl type="email" ref={emailRef} placeholder="Email" required />
                    </FormGroup>

                    <FormGroup id="password" >

                        <FormControl type="password" ref={passwordRef} placeholder="Password" required />
                    </FormGroup>

                    <FormGroup id="password-confirm" >

                        <FormControl type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                    </FormGroup>
                    <Button disabled={loading} type="submit" >Sign Up</Button>
                </Form>
                <Row>
        <Col ><hr class="solid"/></Col>
        <Col style={{minWidth:"160px", textAlign:"center"}}>Or Connect With</Col>
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
