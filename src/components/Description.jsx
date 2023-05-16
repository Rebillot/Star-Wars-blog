import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/AppContext";

function LearnMore() {
  const {actions} = useContext(Context);
  const [detalle, setDetalle] = useState({});
  const pathname = window.location.pathname;
  const pathNameDividido = pathname.split("/");

  useEffect(() => {
  actions.fetchDetalles(pathNameDividido[pathNameDividido.length - 2], pathNameDividido[pathNameDividido.length - 1])
  .then( result =>{setDetalle(result)})
  },[]);

  // const info = detalle.result.properties


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{detalle.result.properties.name}</Card.Title>
        {/* <Card.Text>Birth Year: {info.birth_year}</Card.Text>
        <Card.Text>Eye Color: {info.eye_color}</Card.Text>
        <Card.Text>Gender: {info.gender}</Card.Text>
        <Card.Text>Height: {info.height}</Card.Text>
        <Card.Text>Skin Color: {info.skin_color}</Card.Text> */}
        <Button variant="primary" onClick={()=> console.log(detalle,"real detalleeee")}>Home</Button>
      </Card.Body>
    </Card>
  );
}

export default LearnMore;