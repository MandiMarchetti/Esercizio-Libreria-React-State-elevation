import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = function (props) {
  return (
    <Card className="Book_Card" style={{ height: "25rem" }}>
      <Card.Img className="h-50 object-fit-cover" variant="top" src={props.bookDetails.img} />
      <Card.Body className="card_body">
        <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {props.bookDetails.title}
        </Card.Title>
        <Card.Text>{props.bookDetails.category}</Card.Text>
        <Card.Text>{props.bookDetails.price}</Card.Text>
        <Button variant="success"
        onClick={() => }
        >Details</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
