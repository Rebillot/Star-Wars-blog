import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FavoriteButton from "./FavoriteButton";




function Characters() {
  const [people, setPeople] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePeople = await fetch("https://www.swapi.tech/api/people");
        const dataPeople = await responsePeople.json();
        setPeople(dataPeople.results);
        console.log(dataPeople.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  




  
  return (
    <>
      {people.slice(0, 10).map((character) => (
        <Card
          style={{ width: "13rem", display: "inline-block", textAlign: "center" }}
          key={character.uid}
        >
          <Card.Img
            variant="top"
            src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Learn More</Button>
            <FavoriteButton item={character} />
          </Card.Body>
        </Card>
      ))}
    </>
  );
}



export default Characters;
