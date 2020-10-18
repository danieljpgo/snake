import styled, { css } from 'styled-components';

interface Props {
  $status: 'unfill' | 'fill' | 'snake'
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
  ${(props) => color[props.$status]};
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
`;
