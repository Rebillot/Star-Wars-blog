import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/AppContext";

function LearnMore() {
  const { actions } = useContext(Context);
  const [detalle, setDetalle] = useState({});
  const pathname = window.location.pathname;
  const pathNameDividido = pathname.split("/");

  useEffect(() => {
    actions
      .fetchDetalles(
        pathNameDividido[pathNameDividido.length - 2],
        pathNameDividido[pathNameDividido.length - 1]
      )
      .then((result) => {
        setDetalle(result);
      });
  }, [pathname]);

  const info = detalle.result?.properties;

  if (!info) {
    return null;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary" href="/home">
          Home
        </Button>
      </Card.Body>
    </Card>
  );
}

export default LearnMore;
