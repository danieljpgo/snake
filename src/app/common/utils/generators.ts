import { Matrix } from '../../common/types/matrix';
import { Snake } from '../../common/types/snake';
import { helpers } from '../../common/helpers'

const matrix = (size: number): Matrix => Array
  .from({ length: size }, () => Array
    .from({ length: size }, () => ({ status: 'unfill' })));

const snake = (size: number): Snake => {
  const middle = Math.round(size / 2)
  return [{
    x: middle,
    y: middle,
    direction: 'right',
    head: true,
  }]
}

const food = (size: number): { x: number, y: number } => {
  return {
    x: helpers.getRandomInt(0, size),
    y: helpers.getRandomInt(0, size),
  };
};

export const generators = {
  snake: snake,
  matrix: matrix,
  food: food,
}