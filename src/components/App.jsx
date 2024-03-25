import Header from "./Header";

import Game from "./Game";
import Rules from "./Rules";
import { useState, useEffect } from "react";
import "../scss/App.scss";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  const [positionGrogu, setPositionGrogu] = useState(0);
  const [diceNumber, setDiceNumber] = useState(null);
  const [gameStatus, setGameStatus] = useState("El juego está en progreso");
  const [name, setName] = useState("");
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);

  useEffect(() => {
    if (positionGrogu === 6) {
      setGameStatus("Grogu llega a la mercancia y Grogu todo comer.");
    } else if (positionGrogu !== 0) {
      setGameStatus("Grogu ha avanzado una casilla");
    }
  }, [positionGrogu]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDiceNumber(randomNumber);
    console.log("dado", randomNumber);
    console.log("posición", positionGrogu);
    if (diceNumber === 4) {
      setPositionGrogu(positionGrogu + 1);
    } else if (diceNumber === 1) {
      const newCookies = cookies.slice(0, 1);
      setCookies(newCookies);
    }
  };

  useEffect(() => {}, []);

  const changeName = (value) => {
    setName(value);
  };

  const renderMerch = (merchs) => {
    return merchs.map((merch, index) => {
      return (
        <div key={index} className="goods-item">
          {merch}
        </div>
      );
    });
  };

  return (
    <>
      {" "}
      <Header nameValue={name} />
      <main className="page">
        <Routes>
          <Route
            path="/"
            element={
              <Game
                changeName={changeName}
                nameValue={name}
                positionGrogu={positionGrogu}
                gameStatus={gameStatus}
                renderMerch={renderMerch}
                rollDice={rollDice}
                cookies={cookies}
                eggs={eggs}
                frogs={frogs}
              />
            }
          />
          <Route path="/rules" element={<Rules />} />
          <Route />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
