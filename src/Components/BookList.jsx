import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-2 gy-5">
          <h3 className="titolo-section">Fantasy Books</h3>
          <Col lg={3}>
            <Card>
              <Card.Img className="h-50 object-fit-cover" variant="top" src="" />
              <Card.Body>
                <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  "Book Title"
                </Card.Title>
                <Card.Text>Book Category</Card.Text>
                <Button variant="warning">Buy it Now!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
