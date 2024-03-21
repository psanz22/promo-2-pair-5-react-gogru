import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import { useState } from "react";
import "../scss/App.scss";
import Form from "./Form";

function App() {
  const [positionGrogu, setPositionGrogu] = useState(0);
  const [merch, setMerch] = useState([]);
  const [diceNumber, setDiceNumber] = useState(null);
  const [gameStatus, setGameStatus] = useState("El juego está en progreso");
  const [name, setName] = useState("");

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDiceNumber(randomNumber);
    console.log(randomNumber);
    console.log(positionGrogu);
    if (randomNumber === 4) {
      setPositionGrogu(positionGrogu + 1);
      if (randomNumber === 4 && positionGrogu === 5) {
        setGameStatus("Grogu llega a la mercancia y Grogu todo comer.");
      } else {
        setGameStatus("Grogu ha avanzado una casilla");
      }
    }
  };

  const changeName = (value) => {
    setName(value);
  };

  return (
    <>
      {" "}
      <Header nameValue={name} />
      <main className="page">
        <Form changeName={changeName} nameValue={name} />
        <Board positionGrogu={positionGrogu} />
        <section className="section__dice">
          <Dice handleDice={rollDice} />
          <div className="game-status">{gameStatus}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
