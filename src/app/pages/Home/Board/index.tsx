import React, { useState } from 'react';
import MatrixContainer from './Matrix';
import { useInterval } from '../../../common/hooks/use-interval';
import { Direction } from '../../../common/types/direction';
import { Snake } from '../../../common/types/snake';
import { Matrix } from '../../../common/types/matrix';
import { snake as snakeUtils } from '../../../common/utils/snake';
import Score from './Score';

interface Props {
  size: number,
  snake: Snake,
  ticker: number,
  matrix: Matrix,
  direction: Direction,
  onGenerateFood: (position: [number, number]) => void,
}

const Board = (props: Props) => {
  const {
    direction,
    matrix,
    ticker,
    size,
    snake: snakeDefault,
    onGenerateFood,
  } = props;
  const [snake, setSnake] = useState<Snake>(snakeDefault);
  const [run, setRun] = useState(false);

  useInterval(() => {
    // onGenerateFood(generators.food(size))

    setSnake((prev) => {
      const [x, y] = snakeUtils.positions(prev);
      return snakeUtils.move(direction, x, y, snake);
    });
  }, (run ? ticker : null));

  return (
    <div>
      <button onClick={() => setRun((prev) => !prev)} >
        {/* <button onClick={() => setSnake((prev) => expand(prev, 'top'))} > */}
        {run ? 'stop' : 'play'}
      </button>

      <Score score={1} />
      <MatrixContainer
        size={size}
        matrix={matrix}
        snake={snake}
      />
    </div>
  );
}

export default Board;