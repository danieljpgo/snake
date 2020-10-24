import { Matrix } from '../../common/types/matrix';
import { Snake } from '../../common/types/snake';

export const matrixGenerator = (size: number): Matrix => Array
  .from({ length: size }, () => Array
    .from({ length: size }, () => ({ status: 'unfill' })));

export const snakeGenerator = (size: number): Snake => Array
  .from({ length: size }, (_, j) => Array
    .from({ length: size }, (_, i) => ({
      position: (i === size / 2 && j === size / 2) ? 0 : -1
    }))
  );
