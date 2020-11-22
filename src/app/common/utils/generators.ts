import { Matrix } from '../../common/types/matrix';
import { Snake } from '../../common/types/snake';
import { helpers } from '../../common/helpers'

const matrix = (size: number): Matrix => Array
  .from({ length: size }, () => Array
    .from({ length: size }, () => ({ status: 'unfill' })));

const snake = (size: number): Snake => Array
  .from({ length: size }, (_, j) => Array
    .from({ length: size }, (_, i) => ({
      position: (i === size / 2 && j === size / 2) ? 0 : -1
    }))
  );

const food = (size: number): [number, number] => {
  const j = helpers.getRandomInt(0, size);
  const i = helpers.getRandomInt(0, size);

  return [j, i];
};

export const generators = {
  snake: snake,
  matrix: matrix,
  food: food,
}