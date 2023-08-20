import React from 'react'
import products from '../styles/products/products.module.css'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'

const Products = () => {
  const content = [
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
    {
      image: <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />,
      title: 'Card title',
      subTitle: 'Card subtitle',
      description: 'Some quick example text to build on the card title and make up the bulk of the card‘s content.',
      price: '$59',
      discount: ''
    },
  ]

  return (
    <>
      <div className={products.productsBar}>
        <Col className='col-1'>Filter</Col>
        <Col className='col-2'>Total Products {content.length}</Col>
      </div>
      <div className={products.product}>
        {content?.map((item, i) => (
          <Card key={i}  >
            {item.image}
            <CardBody>
              <CardTitle tag="h5">
                {item.title}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {item.subTitle}
              </CardSubtitle>
              <CardText>
                {item.description}
              </CardText>
              <Button>
                Button
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Products