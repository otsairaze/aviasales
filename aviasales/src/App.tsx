import logo from "./assets/logo.png";
import "./scss/style.scss";
import Card from "./components/Card/Card";
import { Button, Sort } from "./components";

import { useEffect, useState } from "react";
import { getPosts } from "./api/request";

const buttonText = ["Самый дешевый", "Самый быстрый", "Оптимальный"];

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    (async () => {
      await getPosts()
        .then((res) => setFlights(res))
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="logo">
          <img
            className="logo__icon"
            src={logo}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="inner">
          <div className="sort__block">
            <Sort />
          </div>
          <div>
            <div className="list__block">
              {buttonText.map((text) => (
                <Button key={text}>
                  <span className="list__block-text">{text}</span>
                </Button>
              ))}
            </div>
            <div className="card__block">
              {flights.map((obj) => (
                <Card key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
