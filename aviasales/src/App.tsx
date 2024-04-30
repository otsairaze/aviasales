import logo from "./assets/logo.png";
import { Button, Sort, Checkbox } from "./components";
import "./scss/style.scss";

const buttonText = ["Самый дешевый", "Самый быстрый", "Оптимальный"];

function App() {
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

          <div className="list__block">
            {buttonText.map((text) => (
              <Button key={text}>
                <span className="list__block-text">{text}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
