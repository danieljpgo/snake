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
  }]
}

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



// Array
// .from({ length: size }, (_, j) => Array
// .from({ length: size }, (_, i) => {
// if ((i === size / 2 && j === size / 2) || ((i + 1) === size / 2 && j === size / 2) || ((i + 1) === size / 2 && j === size / 2)) {
// return {
// position: 0
// }
// } return {
// position: -1
// }
// 
// return ({
// position: (i === size / 2 && j === size / 2) ? 0 : -1
// })
// 
// })
// );