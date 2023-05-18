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

  let src;

  if (pathNameDividido[pathNameDividido.length - 2] === "people") {
    src = `https://starwars-visualguide.com/assets/img/characters/${
      pathNameDividido[pathNameDividido.length - 1]
    }.jpg`;
  } else if (pathNameDividido[pathNameDividido.length - 2] === "planets") {
    src = `https://starwars-visualguide.com/assets/img/planets/${
      pathNameDividido[pathNameDividido.length - 1]
    }.jpg`;
  } else if (pathNameDividido[pathNameDividido.length - 2] === "vehicles") {
    src = `https://starwars-visualguide.com/assets/img/vehicles/${
      pathNameDividido[pathNameDividido.length - 1]
    }.jpg`;
  }

  return (
    <>
      <div className="card bg-black text-warning" style={{ width: "18rem}" }}>
        <img
          src={src}
          className="card-img-top img-fluid w-25 rounded mx-auto d-block mt-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{info.name}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            accusamus dolores saepe amet reprehenderit explicabo praesentium,
            molestiae quibusdam sint beatae veritatis repellat molestias
            ratione, impedit nostrum voluptatibus tenetur quaerat sapiente!
          </p>
          <a href="/home" className="btn btn-primary">
            Home
          </a>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
