import Board from "./Board";
import Dice from "./Dice";
import Form from "./Form";

function Game({
  changeName,
  name,
  positionGrogu,
  gameStatus,
  renderMerch,
  rollDice,
  cookies,
  eggs,
  frogs,
}) {
  return (
    <>
      <Form changeName={changeName} nameValue={name} />
      <Board positionGrogu={positionGrogu} />
      <section className="section__dice">
        <Dice handleDice={rollDice} />
        <div className="game-status">{gameStatus}</div>
      </section>

      <section className="goods-container">{renderMerch(cookies)};</section>
      <section className="goods-container">{renderMerch(eggs)}</section>
      <section className="goods-container">{renderMerch(frogs)}</section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </>
  );
}

export default Game;
