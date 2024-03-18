import { Alert } from "react-bootstrap";

const CommentArea = (props) => <Alert variant="success">{props.selected || "Nessun valore selezionato"}</Alert>;

export default CommentArea;
