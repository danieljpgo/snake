import React, { useState } from 'react';
import { Container } from './styles';
import MatrixContainer from '../../common/components/Matrix';
import { Snake } from '../../common/types/snake';
import { Matrix } from '../../common/types/matrix';


const size = 10;
const matrix: Matrix = Array
  .from({ length: size }, (_, k) => Array
    .from({ length: size }, (_, x) => ({
      status: 'unfill'
    })));

const snakeInit: Snake = Array
  .from({ length: size }, (_, k) => Array
    .from({ length: size }, (_, x) => false));

const Home: React.FC = () => {
  const [snake, setSnake] = useState<Snake>(snakeInit);

  console.log(matrix)




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