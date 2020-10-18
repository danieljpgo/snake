import 'styled-components';

interface Colors {
  snake: string,
  cell: string,
  food: string,
  text: {
    base: string,
  },
}

interface Shapes {
  borderRadius: number,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    unit: number,
    colors: Colors,
    shapes: Shapes,
  }
}
