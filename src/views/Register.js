import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../styles/register/register.module.css'
import { Input, Label, Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';

const Register = () => {
    const [users, setUsers] = useState(() => {
        return JSON.parse(localStorage.getItem('users')) || [];
    })
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        cPassword: '',
        check: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, user]);
        e.target.reset();
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return (
        <>
            <Container className={register.register}>
                <Link to='/'>Home</Link>
                <div className={register.innerForm}>
                    <Form onSubmit={handleSubmit}
                        style={{ width: '500px', backgroundColor: 'teal', padding: '20px', borderRadius: '7px', color: '#fff' }}>
                        <h4>Register Here</h4>
                        <Row className={register.formTags}>
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
                                            onChange={handleChange}
                                            required
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
                                            onChange={handleChange}
                                            required
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
                                        onChange={handleChange}
                                        required
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
                                            onChange={handleChange}
                                            required
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
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                                id="check"
                                name="check"
                                value='true'
                                type="checkbox"
                                onChange={handleChange}
                                required
                            />
                            <Label
                                check
                                for="check"
                            >
                                Accept terms & conditions.<span>*</span>
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