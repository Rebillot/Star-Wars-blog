import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function FavoriteButton(props) {
    const { item } = props;
    const [isFavorite, setIsFavorite] = useState(false);
    const [listaFavoritos, setListaFavoritos] = useState([]);

    function handleFavorite() {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            setListaFavoritos([...listaFavoritos, item]);
        } else {
            const index = listaFavoritos.indexOf(item);
            if (index !== -1) {
                listaFavoritos.splice(index, 1);
                setListaFavoritos([...listaFavoritos]);
            }
        }
    }

    return (
        <div>
            <Button variant="secondary" onClick={handleFavorite}>
                {isFavorite ? "♥" : "♡"} {item.name}
            </Button>
            
        </div>
    );
}

export default FavoriteButton;
