import logo from "./assets/logo.png";
import "./scss/style.scss";
import Card from "./components/Card/Card";
import { Button, Sort } from "./components";

import { useEffect, useState } from "react";
import { getPosts } from "./api/request";
import axios from "axios";

const buttonText = ["Самый дешевый", "Самый быстрый", "Оптимальный"];

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/flights?${`price_gt = 6000`}`)
      .then((response) => {
        setFlights(response.data);
      });
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
