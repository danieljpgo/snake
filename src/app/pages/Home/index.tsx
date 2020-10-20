import React, { useState } from 'react';
import { Container } from './styles';
import MatrixContainer from '../../common/components/Matrix';
import { Snake } from '../../common/types/snake';
import { Matrix } from '../../common/types/matrix';
import useInterval from '../../common/hooks/use-interval';

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
  const [arrow, setArrow] = useState<'right' | 'bottom'>('right');
  const [run, setRun] = useState(true);

  useInterval(() => {
    setSnake((prev) => {
      const [x, y] = prev.reduce((acc, value, i) => {
        const head = value.findIndex((row) => row.position === 0);
        if (head > -1) {
          return [i, head];
        }
        return acc;
      }, [-1, -1]);

      if (arrow === 'right') {
        return prev.map((col, i) => {
          if (i === x) {
            return col.map((row, j) => {
              if (j === 0 && y === (col.length - 1)) {
                return {
                  position: 0
                };
              }
              if (y === j) {
                return {
                  position: -1
                };
              }
              if ((y + 1) === j) {
                return {
                  position: 0
                };
              }
              return row;
            });
          }
          return col;
        })
      }

      if (arrow === 'bottom') {
        return prev.map((col, i) => {
          if (i === 0 && x === (prev.length - 1)) {
            return col.map((row, j) => {
              if (j === 0 && y === (col.length - 1)) {
                return {
                  position: 0
                };
              }
              if (j === y) {
                return {
                  position: 0
                };
              }
              return row;
            })
          }

          if (x === i) {
            return col.map((row, j) => {
              if (y === j) {
                return {
                  position: -1
                };
              }
              return row;
            });
          }

          if ((x + 1) === i) {
            return col.map((row, j) => {
              if (y === j) {
                return {
                  position: 0
                };
              }
              return row;
            });
          }
          return col;
        })
      }

      return prev;
    })
  }, (run ? ticker : null));

  return (
    <Container>
      <button onClick={() => setRun((prev) => !prev)} >
        {run ? 'stop' : 'play'}
      </button>
      <button onClick={() => setArrow((prev) => prev === 'bottom' ? 'right' : 'bottom')} >
        {run ? 'right' : 'bottom'}
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