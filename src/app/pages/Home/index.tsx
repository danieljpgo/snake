import React, { useState } from 'react';
import { generators } from '../../common//utils/generators';
import { Direction, Keyboard } from '../../common/types/direction';
import { useKey } from '../../common/hooks/use-Key';
import { Container } from './styles';
import Board from './Board';
import { Cell } from '../../common/types/matrix';

const size = 10;
const ticker = 300;
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

  function handleAddFood(position: [number, number]) {
    setMatrix((prev) => {

      // adicionar regras para verificar se pode colocar a food nessa posição da matrix

      const [j, i] = position;
      const food: Cell = { status: 'fill' };

      return prev.map((cells, index) => {
        if (index === j) {
          cells.map((cell, index2) => {
            if (index2 === i) {
              return food;
            } return cell;
          });
        } return cells;
      })
    })
  }

  return (
    <Container>
      <Board
        size={size}
        snake={snake}
        matrix={matrix}
        ticker={ticker}
        direction={direction}
        onGenerateFood={(position) => handleAddFood(position)}
      />
    </Container>
  );
}

export default Home;