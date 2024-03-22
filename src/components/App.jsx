import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import Form from './Form';
import { useState, useEffect } from 'react';
import '../scss/App.scss';

function App() {
  const [positionGrogu, setPositionGrogu] = useState(0);
  const [diceNumber, setDiceNumber] = useState(null);
  const [gameStatus, setGameStatus] = useState('El juego está en progreso');
  const [name, setName] = useState('');
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);

  useEffect(() => {
    if (positionGrogu === 6) {
      setGameStatus('Grogu llega a la mercancia y Grogu todo comer.');
    } else if (positionGrogu !== 0) {
      setGameStatus('Grogu ha avanzado una casilla');
    }
  }, [positionGrogu]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDiceNumber(randomNumber);
    console.log('dado', randomNumber);
    console.log('posición', positionGrogu);
    if (diceNumber === 4) {
      setPositionGrogu(positionGrogu + 1);
    } else if (diceNumber === 1) {
      groguSteals(cookies);
    }
  };

  const changeName = (value) => {
    setName(value);
  };

  const renderMerch = (merchs) => {
    return merchs.map((merch, index) => {
      return (
        <div key={index} className='goods-item'>
          {merch}
        </div>
      );
    });
  };

  const groguSteals = (merchs) => {
    return merchs.splice(0, 1);
  };

  return (
    <>
      {' '}
      <Header nameValue={name} />
      <main className='page'>
        <Form changeName={changeName} nameValue={name} />
        <Board positionGrogu={positionGrogu} />
        <section className='section__dice'>
          <Dice handleDice={rollDice} />
          <div className='game-status'>{gameStatus}</div>
        </section>

        <section className='goods-container'>{renderMerch(cookies)};</section>
        <section className='goods-container'>{renderMerch(eggs)}</section>
        <section className='goods-container'>{renderMerch(frogs)}</section>
        <section>
          <button className='restart-button'>Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
