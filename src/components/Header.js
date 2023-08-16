import React from 'react'
import header from '../styles/header/header.module.css'
import NavBar from '../components/NavBar'
import { Container, Row } from 'reactstrap'

const Header = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Row className={header.header}>
                    <div>Header</div>
                </Row>
            </Container>
        </>
    )
}

export default Header