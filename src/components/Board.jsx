import '../scss/components/Board.scss';
import Grogu from './Grogu';

const Board = ({ positionGrogu }) => {
  const cells = Array(7).fill(null);
  const renderCells = () => {
    return cells.map((cell, index) => {
      if (positionGrogu === index) {
        return (
          <div key={index} className='cell'>
            <Grogu />
          </div>
        );
      } else {
        return <div key={index} className='cell'></div>;
      }
    });
  };

  return <section className='board'>{renderCells()}</section>;
};
export default Board;
