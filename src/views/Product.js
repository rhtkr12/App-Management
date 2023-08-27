import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'


const Product = () => {

    const { id } = useParams()

    const content = [
        {
            id: '1',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '2',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '3',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '4',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '5',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '6',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '7',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '8',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '9',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '10',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
        {
            id: '11',
            image: "https://picsum.photos/300/200",
            title: 'Card title',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: '$59',
            discount: ''
        },
    ]

    return (
        <>
            <Container>
                {content?.map((product) => (
                    (product.id === id) && (
                        <Row className='justify-center border '>
                            <Col className='d-flex border'>
                                <Col className='col-2'>Images</Col>
                                <Card className="col-5 my-2">
                                    <CardImg
                                        alt="Imagr"
                                        src={product.image}
                                        style={{ height: 450, width: 400 }}
                                        top
                                        width="100%"
                                    />
                                </Card>
                            </Col>
                            <Col className='col-6 d-flex justify-center align-center'>
                                <Card className='border '>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {product.subTitle}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {product.subTitle}
                                        </CardSubtitle>
                                        <CardText>
                                            {product.description}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    )
                ))}
            </Container>
        </>
    )
}

export default Product