import React, { useState } from 'react';
import { Container } from './styles';
import MatrixContainer from '../../common/components/Matrix';
import { Snake } from '../../common/types/snake';
import { Matrix } from '../../common/types/matrix';
import useInterval from '../../common/hooks/use-interval';
import { move } from './utils';
import useKey from '../../common/hooks/use-Key';

const ticker = 300;
const size = 10;
const matrix: Matrix = Array
  .from({ length: size }, (_, k) => Array
    .from({ length: size }, (_, x) => ({
      status: 'unfill'
    })));

const snakeInit: Snake = Array
  .from({ length: size }, (_, k) => Array
    .from({ length: size }, (_, x) => {
      return {
        position: (x === size / 2 && k === size / 2) ? 0 : -1
      }
    }));

const Home = () => {
  const [snake, setSnake] = useState<Snake>(snakeInit);
  const [arrow, setArrow] = useState<'right' | 'bottom' | 'left' | 'top'>('right');
  const [run, setRun] = useState(true);

  // @TODO fazer funcionar apens para um EventListener

  useKey(() => {
    setArrow((prev) => prev !== 'bottom' ? 'top' : prev)
  }, 'w');

  useKey(() => {
    setArrow((prev) => prev !== 'top' ? 'bottom' : prev)
  }, 's');

  useKey(() => {
    setArrow((prev) => prev !== 'right' ? 'left' : prev)
  }, 'a');

  useKey(() => {
    setArrow((prev) => prev !== 'left' ? 'right' : prev)
  }, 'd');

  useInterval(() => {
    setSnake((prev) => {
      const [x, y] = prev.reduce((acc, value, i) => {
        const head = value.findIndex((row) => row.position === 0);
        if (head > -1) {
          return [i, head];
        }
        return acc;
      }, [-1, -1]);

      return move(arrow, x, y, snake);
    })
  }, (run ? ticker : null));

  return (
    <Container>
      <button onClick={() => setRun((prev) => !prev)} >
        {run ? 'stop' : 'play'}
      </button>
      <button onClick={() => setArrow((prev) => prev === 'top' ? 'bottom' : 'top')} >
        {run ? 'right' : 'left'}
      </button>
      <MatrixContainer
        size={size}
        matrix={matrix}
        snake={snake}
      />
    </Container>
  );
}

export default Home;