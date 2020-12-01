import React, { useState, useEffect } from 'react';
import MatrixContainer from './Matrix';
import { useInterval } from '../../../common/hooks/use-interval';
import { Direction } from '../../../common/types/direction';
import { Snake } from '../../../common/types/snake';
import { Matrix } from '../../../common/types/matrix';
import { snake as snakeUtils } from '../../../common/utils/snake';
import Score from './Score';
import { generators } from '../../../common/utils/generators';

interface Props {
  size: number,
  snake: Snake,
  ticker: number,
  matrix: Matrix,
  direction: Direction,
}

const Board = (props: Props) => {
  const {
    direction,
    matrix,
    ticker,
    size,
    snake: snakeDefault,
  } = props;
  const [snake, setSnake] = useState<Snake>(snakeDefault);
  const [run, setRun] = useState(false);
  const [food, setFood] = useState({ x: 0, y: 0 });

  useInterval(() => {
    setSnake((prev) => snakeUtils.move(direction, prev, size));
  }, (run ? ticker : null));


  useEffect(() => {
    const snakeHeadIndex = direction === 'top' || direction === 'left' ? 0 : snake.length - 1;

    if (snake[snakeHeadIndex].y === food.y && snake[snakeHeadIndex].x === food.x) {
      setFood(generators.food(size))
      setSnake((prev) => snakeUtils.expand(prev, direction));
    }
  }, [snake, direction, food, size])

  return (
    <div>
      <button onClick={() => setRun((prev) => !prev)} >
        {run ? 'stop' : 'play'}
      </button>

      <button onClick={() => setSnake((prev) => {
        return snakeUtils.expand(prev, direction)
      })
      }>
        expand
      </button>

      <Score score={1} />
      <MatrixContainer
        size={size}
        matrix={matrix}
        snake={snake}
        food={food}
      />
    </div >
  );
}

export default Board;


// function handleAddFood(position: [number, number]) {
//   setMatrix((prev) => {

//     // adicionar regras para verificar se pode colocar a food nessa posição da matrix

//     const [j, i] = position;
//     const food: Cell = { status: 'fill' };

//     return prev.map((cells, index) => {
//       if (index === j) {
//         cells.map((cell, index2) => {
//           if (index2 === i) {
//             return food;
//           } return cell;
//         });
//       } return cells;
//     })
//   })
// }