import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import BooksFantasy from "../Data/fantasy.json";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-2 gy-5">
          <h3 className="titolo-section">Fantasy Books</h3>
          {BooksFantasy.map((oneBook) => {
            return (
              <Col className="my-2 col-sm-6" key={oneBook.asin}>
                <SingleBook bookDetails={oneBook} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
