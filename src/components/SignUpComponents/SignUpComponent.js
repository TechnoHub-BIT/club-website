import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Alert,  Nav, NavItem, NavLink, Row, Label,Col} from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import classnames from 'classnames';
import './SignUpStyles.css';
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { db,auth } from '../../firebase'

function SignUpComponent() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, signupWithGoogle} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
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

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
          <div className="signup-container">
            <HeaderTitle heading="SIGN UP" />
            <Breadcrumb>
                <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                <BreadcrumbItem icon="fas fa-user-plus" title="Sign Up" status="active" />
            </Breadcrumb>
            <div className="container">
              <Card className="signup-card">
                <CardBody>
                  <Nav tabs className="nav-fill">
                    <NavItem>
                      <Link to="/signup" style={{color:"black", textDecoration:"none"}}>
                        <NavLink
                          className={classnames({ active: activeTab === '1' })}
                          onClick={() => { toggle('1'); }}
                          // href="/signup"
                          style={{fontWeight:"bold"}}
                        >
                          Sign Up
                        </NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/login" style={{color:"inherit", textDecoration:"none"}}>
                        <NavLink
                          className={classnames({ active: activeTab === '2' })} 
                          // href="/login"
                          style={{backgroundColor:"#E6E6E6",backgroundImage:"linear-gradient(to right, #E6E6E6 , #F2F5F3)",color:"darkgray", fontWeight:"bold"}}

                          onClick={() => { toggle('2'); }}
                        >
                          Log In
                        </NavLink>
                      </Link>
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
                    <Button className="signup-button" disabled={loading} type="submit"><i className="fas fa-user-plus"></i>&nbsp;&nbsp;Sign Up</Button>
                  </Form>
                  <Row>
                    <Col><hr class="solid"/></Col>
                    <Col style={{minWidth:"160px", textAlign:"center"}}>Or Connect With</Col>
                    <Col><hr class="solid"/></Col>
                  </Row>
                </CardBody>
                <Button
                  onClick={handleSubmitWithGoogle}
                  type="button"
                  className="login_signInButton"
                  color="info"
                >
                  <i className="fab fa-google"></i>&nbsp;&nbsp;Sign Up with Google
                </Button>
              </Card>
            </div>
            {/* </div> */}
          </div>
        </>
    )
}

export default SignUpComponent
