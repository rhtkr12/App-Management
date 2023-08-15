import React from 'react'
import NavBar from '../components/NavBar'
import { Container } from 'reactstrap'

const Header = () => {
    return (
        <>
            <NavBar />
            <Container>
                <div>Header</div>
            </Container>
        </>

    )
}

export default Header