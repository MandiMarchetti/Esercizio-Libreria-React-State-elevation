import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LibreriaNavbar from "./Components/LibreriaNavBar";
import LibreriaFooter from "./Components/LibreriaFooter";
import BookList from "./Components/BookList";
// import CommentArea from "./Components/CommentArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LibreriaNavbar />
          <Container>
            <Row>
              <Col>
                <BookList />
              </Col>
              {/* <Col>
                <CommentArea />
              </Col> */}
            </Row>
          </Container>
        </header>
        <LibreriaFooter />
      </div>
    );
  }
}

export default App;
