import React from 'react'
import products from '../styles/products/products.module.css'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Products = () => {
  const content = [
    {
      id: '1',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 1',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '2',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 2',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '3',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 3',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '4',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 4',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '5',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 5',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '6',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 6',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '7',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 7',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '8',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 8',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '9',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 9',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '10',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 10',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
    },
    {
      id: '11',
      image: "https://picsum.photos/300/200",
      title: 'Card title - 11',
      subTitle: 'Card subtitle',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 59,
      discount: 10
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
          <Card key={item.id} className={products.productCard}>
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
                {item.description.substring(0, 50)}...
              </CardText>
              <CardText>
                <span>Price ${item.price}</span> - <span>Discount ${item.discount}</span>
              </CardText>
              <div>
                <Button color='warning'>
                  Buy This
                </Button> {' '}
                <Button color='outline-warning'>
                  Add to Cart
                </Button>
              </div>

            </CardBody>
          </Card>
        ))}
      </div >
    </>
  )
}

export default Products