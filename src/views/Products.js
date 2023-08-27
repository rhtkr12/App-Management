import React from 'react'
import products from '../styles/products/products.module.css'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Products = () => {
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
      <div className={products.productsBar}>
        <Col className='col-1'>Filter</Col>
        <Col className='col-2'>Total Products {content.length}</Col>
      </div>
      <div className={products.product}>
        {content?.map((item) => (
          <Card key={item.id}  >
            <Link to={`/apps/products/product/${item.id}`}>
              <CardImg
                alt="Image"
                src={item.image}
                style={{
                  height: 180
                }}
                top
                width="100%"
              />
            </Link>
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
      </div >
    </>
  )
}

export default Products