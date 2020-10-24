import React, { useState } from 'react';
import MatrixContainer from './Matrix';
import { useInterval } from '../../../common/hooks/use-interval';
import { Direction } from '../../../common/types/direction';
import { Snake } from '../../../common/types/snake';
import { Matrix } from '../../../common/types/matrix';
import { move, positions } from './utils';
import Score from './Score';

interface Props {
  size: number,
  snake: Snake,
  ticker: number,
  matrix: Matrix,
  direction: Direction,
}

const Board = (props: Props) => {
  const { direction, matrix, ticker, size, snake: snakeDefault } = props;
  const [snake, setSnake] = useState<Snake>(snakeDefault);
  const [run, setRun] = useState(true);

  useInterval(() => {
    setSnake((prev) => {
      const [x, y] = positions(prev);
      return move(direction, x, y, snake);
    });
  }, (run ? ticker : null));

  return (
    <div>
      <button onClick={() => setRun((prev) => !prev)} >
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