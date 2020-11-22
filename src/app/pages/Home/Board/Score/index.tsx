import React from 'react';
import { Container } from './styles';

interface Props {
  score: number;
}

const Score = (props: Props) => {
  const { score } = props;

  return (
    <Container>
      {score}
    </Container>
  );
}

export default React.memo(Score);