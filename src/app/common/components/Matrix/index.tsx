import React from 'react';
import CellContainer from './Cell';
import { Container, Content } from './styles';
import { Snake } from '../../types/snake';
import { Matrix as MatrixType } from '../../types/matrix';

interface Props {
  size: number;
  matrix: MatrixType;
  snake: Snake;
}

const Matrix = (props: Props) => {
  const { size, matrix, snake } = props;

  return (
    <Container $size={size}>
      {matrix.map((col, i) => (
        <Content
          key={i}
          $size={size}
        >
          {col.map((row, j) => (
            <CellContainer
              key={i + j}
              status={snake[i][j] ? 'snake' : row.status}
            />
          ))}
        </Content>
      ))}
    </Container>
  );
};

export default Matrix;
