import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Alert,  Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import classnames from 'classnames';
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
    const [activeTab, setActiveTab] = useState('2');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
          <div className="login-container" >
                <div className="container">
          
       
                <Card className="login-card" >
                       
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

                <Form onSubmit={handleSubmit} className="login-form" >
                    <FormGroup id="email" >

                        <FormControl type="email" ref={emailRef} placeholder="Enter Your Email" required />
                    </FormGroup>

                    <FormGroup id="password" >

                        <FormControl type="password" ref={passwordRef} placeholder="Enter Your Password" required />
                    </FormGroup>
                    <div style={{textAlign:"right", margin:"20px"}} >
                      <Link to="/forgot-password" >Forgot your password?</Link> 
                      </div>

                    <Button disabled={loading}  type="submit" >Log In</Button>
                </Form>

                <Row>
        <Col ><hr class="solid"/></Col>
        <Col style={{minWidth:"160px", textAlign:"center"}}>Or Connect With</Col>
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
