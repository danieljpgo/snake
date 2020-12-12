import React, { useState } from 'react';
import { generators } from '../../common//utils/generators';
import { Direction, Keyboard } from '../../common/types/direction';
import { useKey } from '../../common/hooks/use-Key';
import { Container } from './styles';
import Board from './Board';

const size = 10;
const ticker = 100;
const matrixDefault = generators.matrix(size);
const snake = generators.snake(size);

const Home = () => {
  const [direction, setDirection] = useState<Direction>('right');
  const [matrix, setMatrix] = useState(matrixDefault);

  useKey((e) => {
    const key = e.key as Keyboard;
    if (key === 'w')
      setDirection((prev) => prev !== 'bottom' ? 'top' : prev)
    if (key === 's')
      setDirection((prev) => prev !== 'top' ? 'bottom' : prev)
    if (key === 'a')
      setDirection((prev) => prev !== 'right' ? 'left' : prev)
    if (key === 'd')
      setDirection((prev) => prev !== 'left' ? 'right' : prev)
  }, ['w', 'a', 's', 'd']);

  return (
    <Container>
      <Board
        size={size}
        snake={snake}
        matrix={matrix}
        ticker={ticker}
        direction={direction}
      />
    </Container>
  );
}

export default Home;