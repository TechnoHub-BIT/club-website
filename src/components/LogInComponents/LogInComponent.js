import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Alert,  Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import classnames from 'classnames';
import './LogInStyles.css'
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../HeaderComponents/HeaderTitle";

function LogInComponent() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login, signupWithGoogle} = useAuth()
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

    async function handleSubmitWithGoogle(e) {
      e.preventDefault()


      try{

          setError('')
          setLoading(true)          
          await signupWithGoogle()
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
          <div className="login-container">
            <HeadingTitle heading="LOGIN / SIGN UP" />
            <Breadcrumb>
                <BreadcrumbItem title="Home" path="/" />
                <BreadcrumbItem title="Login / Sign Up" status="active" />
            </Breadcrumb>
            <div className="container">
              <Card className="login-card">
                <CardBody>
                  <Nav tabs className="nav-fill">
                    <NavItem>
                      <Link to="/signup" style={{color:"inherit", textDecoration:"none"}}>
                        <NavLink
                          className={classnames({ active: activeTab === '1' })}
                          onClick={() => { toggle('1'); }}
                          style={{backgroundColor:"#E6E6E6",backgroundImage:"linear-gradient(to right, #E6E6E6 , #F2F5F3)",color:"darkgray", fontWeight:"bold"}}

                          // href="/signup"
                        >
                          Sign Up
                          {/* Sign Up */}
                        </NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/login" style={{color:"black", textDecoration:"none"}}>
                        <NavLink
                          className={classnames({ active: activeTab === '2' })} 
                          // href="/login"
                          style={{fontWeight:"bold"}}
                          onClick={() => { toggle('2'); }}
                        >
                          Log In
                        </NavLink>
                      </Link>
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
                    <div style={{textAlign:"right", marginTop:"20px"}} >
                      <Link to="/forgot-password" >Forgot your password?</Link> 
                    </div>
                    <Button disabled={loading}  type="submit" >Login</Button>
                  </Form>
                  <Row>
                    <Col ><hr class="solid"/></Col>
                    <Col style={{minWidth:"160px", textAlign:"center"}}>Or Connect With</Col>
                    <Col ><hr class="solid"/></Col>
                  </Row>
                  <Row>
                    
                  </Row>
                </CardBody>
                <Button
                  onClick={handleSubmitWithGoogle}
                  type="button"
                  className="login_signInButton"
                  color="info"
                >
                  <i className="fab fa-google"></i>&nbsp;&nbsp;Login with Google
                </Button>
                {/* </Row> */}
              </Card>
            </div>
       {/* </div> */}
          </div>
        </>
    )
}

export default LogInComponent
