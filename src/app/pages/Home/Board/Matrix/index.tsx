import React from 'react';
import Cell from './Cell';
import { Container, Content } from './styles';
import { Matrix as MatrixType } from '../../../../common/types/matrix';
import { Snake } from '../../../../common/types/snake';

interface Props {
  size: number;
  matrix: MatrixType;
  snake: Snake;
  food: {
    x: number;
    y: number;
  }
}

const Matrix = (props: Props) => {
  const { size, matrix, snake, food } = props;

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
              status={snake.find((position) => position.x === i && position.y === j) ? 'snake' : (food.x === i && food.y === j) ? 'fill' : row.status}
            />
          ))}
        </Content>
      ))}
    </Container>
  );
};

export default Matrix;
