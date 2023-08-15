import { Container } from 'reactstrap'
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layouts = () => {
    return (
        <>
            <Container>
                <Header />
                <Outlet />
                <Footer />
            </Container>
        </>
    )
}

export default Layouts