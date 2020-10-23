import React, { useState } from 'react';
import Board from './Board';
import { Container } from './styles';
import { Direction } from '../../common/types/direction';
import useKey from '../../common/hooks/use-Key';
import { Keys } from '../../common/types/keys';

const Home = () => {
  const [arrow, setArrow] = useState<Direction>('right');

  useKey((e) => {
    switch (e.key) {
      case Keys.up:
        setArrow((prev) => prev !== 'bottom' ? 'top' : prev)
        break;
      case Keys.down:
        setArrow((prev) => prev !== 'top' ? 'bottom' : prev)
        break;
      case Keys.left:
        setArrow((prev) => prev !== 'right' ? 'left' : prev)
        break;
      case Keys.right:
        setArrow((prev) => prev !== 'left' ? 'right' : prev)
        break;

      default:
        setArrow('right')
        break;
    }
  }, [Keys.up, Keys.down, Keys.left, Keys.right]);

  return (
    <Container>
      <Board arrow={arrow} />
    </Container>
  );
}

export default Home;