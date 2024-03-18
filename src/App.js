import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./Components/BookList";
import CommentArea from "./Components/CommentArea";

import { Component } from "react";

class App extends Component {
  // se lo stato vivesse qua, lo potremmo ri-passare in basso come prop sia a Table che a Detail

  // poichè App era un componente a funzione, siamo stati costretti a convertirlo in un componente a classe
  // in modo da poter spostare qui lo stato di Table

  state = {
    selected: undefined,
  };

  changeAppState = (newSelectedValue) => {
    // newSelectedValue può essere "Uno", "Due" o "Tre"
    this.setState({
      selected: newSelectedValue,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <BookList />
              </Col>
              <Col>
                <CommentArea />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
