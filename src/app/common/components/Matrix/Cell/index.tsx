import React, { memo } from 'react';
import { Container } from './styles';
import { Status } from '../../../types/matrix';

interface Props {
  status: Status
}

const Cell = (props: Props) => {
  const { status } = props;

  return (
    <Container $status={status} />
  );
};

export default memo(Cell);
