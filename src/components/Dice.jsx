import '../scss/components/Dice.scss';
function Dice({ handleDice }) {
  const handleClick = () => {
    handleDice();
  };
  return (
    <>
      <button onClick={handleClick} className='dice'>
        Lanzar Dado
      </button>
    </>
  );
}

export default Dice;
