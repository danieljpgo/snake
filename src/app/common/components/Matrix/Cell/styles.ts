import styled, { css } from 'styled-components';
import { Status } from '../../../types/matrix';

interface Props {
  $status: Status
}

const color = {
  unfill: css`
    background-color: ${(props) => props.theme.colors.cell};
  `,
  fill: css`
    background-color: ${(props) => props.theme.colors.food};
  `,
  snake: css`
    background-color: ${(props) => props.theme.colors.snake};
  `,
}

export const Container = styled.div<Props>`
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  ${(props) => color[props.$status]};
`;
