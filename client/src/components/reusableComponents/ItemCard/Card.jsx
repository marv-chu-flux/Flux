import "./card.css"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import shopGif from "../images/clothGif.gif";
import shopGif2 from "../images/clothGif2.gif";
import shopGif3 from "../images/clothGif3.gif";

const ItemCard = () => {
    return (
      <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card className="mb-4">
          <Card.Img variant="top" src={shopGif} />
          <Card.Body>
            <Card.Title>Thoughtful gifting</Card.Title>
            <Card.Text>
              Delight a loved one with complimentary wrapping and personalised
              gift tags on all orders, or give the gift of choice with an FLUX
              voucher of any amount.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="mb-4">
          <Card.Img variant="top" src={shopGif3} />
          <Card.Body>
            <Card.Title>Creative collective</Card.Title>
            <Card.Text>
              A collection of projects and features in collaboration with a
              diverse collective of creatives around the world.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="mb-4">
          <Card.Img variant="top" src={shopGif2} />
          <Card.Body>
            <Card.Title>Timeless Pieces</Card.Title>
            <Card.Text>
              Timeless pieces evoke a sense of classic elegance and are
              appreciated for their ability to transcend fleeting trends, making
              them cherished and relevant for generations.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    )    
}

export default ItemCard