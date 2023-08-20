import React from 'react'
import login from '../styles/login/login.module.css'
import { Link } from 'react-router-dom'
import { Container, Form, Label, Col, FormGroup, Input, Button } from 'reactstrap'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted')
    }

    return (
        <Container className={login.login}>
            <div>
                <Form onSubmit={handleSubmit}
                    style={{ backgroundColor: 'teal', padding: '20px', borderRadius: '7px', color: '#fff' }}>
                    <h4>Login here</h4>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"

                        >
                            Email<span>*</span>
                        </Label>
                        <Col>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Email address"
                                type="email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="password"

                        >
                            Password<span>*</span>
                        </Label>
                        <Col>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                        </Col>
                    </FormGroup>
                    <Col className='d-flex' style={{ flexDirection: 'column' }}>
                        <Button color='primary' className='my-2'>
                            Login
                        </Button>
                        <span>Don't have an account <Link to='/register'>Register</Link> here.</span>
                    </Col>
                </Form>
            </div>
        </Container>
    )
}

export default Login