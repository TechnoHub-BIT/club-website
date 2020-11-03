import React, {useRef} from 'react'
import { useState } from 'react'
import {  FormControl } from 'react-bootstrap'
import { Button, Card, Form, CardBody, FormGroup, Alert,  Nav, NavItem, NavLink, Row, Col, CardTitle} from 'reactstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link} from 'react-router-dom';
import './ForgotPasswordStyles.css'
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../HeaderComponents/HeaderTitle";

function ForgotPasswordComponent() {

    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        }
        catch{
            setError("Failed to Reset Password")
        }
        setLoading(false)

    }

    return (
        <>
          <div className="forgot-password-container">
            <HeadingTitle heading="LOGIN / SIGN UP" />
            <Breadcrumb>
                <BreadcrumbItem title="Home" path="/" />
                <BreadcrumbItem title="Login / Sign Up" path="/login" />
                <BreadcrumbItem title="Forgot Password" status="active" />
            </Breadcrumb>
            <div className="container">
                <Card className="forgot-password-card">
                    <CardBody>
                        <CardTitle className="forgot-password-card-title">Forgot Password</CardTitle>
                        {error && <Alert color="danger">{error}</Alert>}
                        {message && <Alert color="success">{message}</Alert>}
                        <Form onSubmit={handleSubmit} className="forgot-password-form" >
                            <FormGroup id="email" >
                                <FormControl type="email" ref={emailRef} placeholder="Enter Your Email" required />
                            </FormGroup>
                            <Button disabled={loading}  type="submit" >Reset Password</Button>
                        </Form>
                    </CardBody>
                    <div style={{textAlign:"center"}} >
                        Back to <Link to="/login" >Login</Link> 
                    </div>
                </Card>
            </div>
          </div>
        </>
    )
}

export default ForgotPasswordComponent
