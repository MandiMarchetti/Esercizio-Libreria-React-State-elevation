import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const LibreriaFooter = function () {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-dark text-white py-5">
          <Col xs={12} className="d-flex justify-content-center">
            <p>Copyright © 2024 Amy Libreria.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default LibreriaFooter;
