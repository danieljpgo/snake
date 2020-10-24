import styled from 'styled-components';

interface Props {
  $size: number
}

export const Container = styled.div<Props>`
  display: grid; 
  gap: ${(props) => props.theme.unit / 2}px;
  grid-template-rows: repeat(${(props) => props.$size}, ${(props) => props.theme.unit * 2}px);
  grid-template-columns: 1fr; 
  `;

export const Content = styled.div<Props>`
  display: grid; 
  gap: ${(props) => props.theme.unit / 2}px;
  grid-template-columns: repeat(${(props) => props.$size}, ${(props) => props.theme.unit * 2}px); 
`;
