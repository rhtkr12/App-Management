import React from 'react';
import register from '../styles/register/register.module.css'
import { Link } from 'react-router-dom';
import { Input, Label, Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted')
    }

    return (
        <>
            <Container className={register.register}>
                <div className={register.innerForm}>
                    <Form onSubmit={handleSubmit}
                        style={{ backgroundColor: 'teal', padding: '20px', borderRadius: '7px', color: '#fff' }}>
                        <h4>Register Here</h4>
                        <Row style={{ flexDirection: 'column', gap: 5 }}>
                            <Col className='d-flex gap-2'>
                                <Col>
                                    <FormGroup>
                                        <Label for="firstname">
                                            First Name<span>*</span>
                                        </Label>
                                        <Input
                                            id="firstname"
                                            name="firstname"
                                            placeholder="First Name"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="lastname">
                                            Last Name<span>*</span>
                                        </Label>
                                        <Input
                                            id="lastname"
                                            name="lastname"
                                            placeholder="Last Name"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="email">
                                        Email address<span>*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Email address"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col className='d-flex gap-2'>
                                <Col>
                                    <FormGroup>
                                        <Label for="password">
                                            Password<span>*</span>
                                        </Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="cPassword">
                                            Confirm Password<span>*</span>
                                        </Label>
                                        <Input
                                            id="cPassword"
                                            name="cPassword"
                                            placeholder="Confirm Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                                id="check"
                                name="check"
                                type="checkbox"
                            />
                            <Label
                                check
                                for="check"
                            >
                                Accept terms & contditions.<span>*</span>
                            </Label>
                        </FormGroup>
                        <Col className='d-flex' style={{ flexDirection: 'column' }}>
                            <Button color='primary' className='my-2'>
                                Register
                            </Button>
                            <span>Already have an account <Link to='/login'>Login</Link> here.</span>
                        </Col>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Register