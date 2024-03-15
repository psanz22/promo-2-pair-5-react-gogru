import Header from './Header';
import Board from './Board';
import { useState } from 'react';
import '../scss/App.scss';

function App() {
  const [positionGrogu, setPositionGrogu] = useState(0);
  const [merch, setMerch] = useState([]);
  const [diceNumber, setDiceNumber] = useState(null);
  const [gameStatus, setGameStatus] = useState('En proceso');

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDiceNumber(randomNumber);
  };

  return (
    <>
      {' '}
      <Header />
      <main className='page'>
        <Board />
        <section>
          <button onClick={rollDice} className='dice'>
            Lanzar Dado
          </button>
          <div className='game-status'>En curso</div>
        </section>

        <section className='goods-container'>
          <div className='goods-item'>🍪</div>
          <div className='goods-item'>🍪</div>
          <div className='goods-item'>🍪</div>
        </section>
        <section className='goods-container'>
          <div className='goods-item'>🥚</div>
          <div className='goods-item'>🥚</div>
          <div className='goods-item'>🥚</div>
        </section>
        <section className='goods-container'>
          <div className='goods-item'>🐸</div>
          <div className='goods-item'>🐸</div>
          <div className='goods-item'>🐸</div>
        </section>
        <section>
          <button className='restart-button'>Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
