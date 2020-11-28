import React from 'react';
import Cell from './Cell';
import { Container, Content } from './styles';
import { Matrix as MatrixType } from '../../../../common/types/matrix';
import { Snake } from '../../../../common/types/snake';

interface Props {
  size: number;
  matrix: MatrixType;
  snake: Snake;
}

const Matrix = (props: Props) => {
  const { size, matrix, snake } = props;

  console.log(snake)

  return (
    <Container $size={size}>
      {matrix.map((col, i) => (
        <Content
          key={`${i}`}
          $size={size}
        >
          {col.map((row, j) => (
            <Cell
              key={`${i}-${j}`}
              status={snake.find((position) => position.x === i && position.y === j) ? 'snake' : row.status}
            />
          ))}
        </Content>
      ))}
    </Container>
  );
};

export default Matrix;
