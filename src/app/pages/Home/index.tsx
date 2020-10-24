import React, { useState } from 'react';
import { matrixGenerator, snakeGenerator } from './utils';
import { Direction, Keyboard } from '../../common/types/direction';
import { useKey } from '../../common/hooks/use-Key';
import { Container } from './styles';
import Board from './Board';

const size = 30;
const ticker = 300;
const matrix = matrixGenerator(size);
const snake = snakeGenerator(size);

const Home = () => {
  const [direction, setDirection] = useState<Direction>('right');

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