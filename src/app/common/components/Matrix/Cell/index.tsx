import React from 'react';
import { Container } from './styles';

interface Props {
  status: 'unfill' | 'fill' | 'snake'
}

const Cell = (props: Props) => {
  const { status } = props;

  return (
    <Container $status={status} />
  );
};

export default Cell;
