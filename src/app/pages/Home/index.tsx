import React, { useState } from 'react';
import Board from './Board';
import { Key } from '../../common/types/direction';
import { useKey } from '../../common/hooks/use-Key';
import { Container } from './styles';

const Home = () => {
  const [arrow, setArrow] = useState<Key>('right');

  //@TODO improve the use of typing and enums
  useKey((e) => {
    if (e.key === 'w')
      setArrow((prev) => prev !== 'bottom' ? 'top' : prev)
    if (e.key === 's')
      setArrow((prev) => prev !== 'top' ? 'bottom' : prev)
    if (e.key === 'a')
      setArrow((prev) => prev !== 'right' ? 'left' : prev)
    if (e.key === 'd')
      setArrow((prev) => prev !== 'left' ? 'right' : prev)
  }, ['w', 'a', 's', 'd']);

  return (
    <Container>
      <Board arrow={arrow} />
    </Container>
  );
}

export default Home;