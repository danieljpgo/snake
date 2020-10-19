import React, { useState } from 'react';
import { Container } from './styles';
import MatrixContainer from '../../common/components/Matrix';
import { Snake } from '../../common/types/snake';
import { Matrix } from '../../common/types/matrix';
import useInterval from '../../common/hooks/use-interval';

const ticker = 1000;
const size = 10;
const matrix: Matrix = Array
  .from({ length: size }, (_, k) => Array
    .from({ length: size }, (_, x) => ({
      status: 'unfill'
    })));

const snakeInit: Snake = Array
  .from({ length: size }, (_, k) => Array
    .from({ length: size }, (_, x) => (!!!k && !!!x) || false));

const Home = () => {
  const [snake, setSnake] = useState<Snake>(snakeInit);
  const [run, setRun] = useState(true);

  useInterval(() => {
    // setSnake((prev) => {
    //   const index = prev[0].findIndex((s) => s)
    //   console.log(index);

    //   const a = [...prev]
    //   a[0][index] = false;
    //   if (index === prev.length - 1) {
    //     a[0][0] = true;
    //   } else {
    //     a[0][index + 1] = true;
    //   }

    //   return a;
    // })

  }, (run ? ticker : null));

  console.log('Home');

  return (
    <Container>
      <MatrixContainer
        size={size}
        matrix={matrix}
        snake={snake}
      />
    </Container>
  );
}

export default Home;