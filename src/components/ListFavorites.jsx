import React from "react";

function ListFavorites(props) {
  const { listaFavoritos } = props;

  if (!listaFavoritos|| listaFavoritos.length === 0){
    return <p>no favoritos yet</p>
  }

  return (
    <ul>
      {listaFavoritos.map((favorite, index) => (
        <li key={index}>{favorite.name}</li>
      ))}
    </ul>
  );
}

export default ListFavorites;