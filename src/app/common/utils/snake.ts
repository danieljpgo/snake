import { Snake } from '../../common/types/snake';
import { Direction } from '../../common/types/direction';

const right = (snake: Snake, size: number): Snake =>
  snake.map((body) => {
    if (body.y === (size - 1)) {
      return {
        x: body.x,
        y: 0,
      }
    }

    return {
      x: body.x,
      y: body.y + 1,
    }
  });

const left = (snake: Snake, size: number): Snake =>
  snake.map((body) => {
    if (body.y === 0) {
      return {
        x: body.x,
        y: size,
      }
    }

    return {
      x: body.x,
      y: body.y - 1,
    }
  });

const bottom = (snake: Snake, size: number): Snake =>
  snake.map((body) => {
    if (body.x === size) {
      return {
        x: 0,
        y: body.y,
      }
    }

    return {
      x: body.x + 1,
      y: body.y,
    }
  });

const top = (snake: Snake, size: number): Snake =>
  snake.map((body) => {
    if (body.x === 0) {
      return {
        x: size,
        y: body.y,
      }
    }

    return {
      x: body.x - 1,
      y: body.y,
    }
  });

const move = (direction: Direction, snake: Snake, size: number) => {
  switch (direction) {
    case 'right':
      return right(snake, size);
    case 'left':
      return left(snake, size);
    case 'top':
      return top(snake, size);
    case 'bottom':
      return bottom(snake, size);
    default:
      return snake;
  };
};

const expand = (snake: Snake, direction: Direction): Snake => {
  switch (direction) {
    case 'right':
      return [
        {
          x: snake[0].x,
          y: snake[0].y - 1
        },
        ...snake,
      ]
    case 'left':
      return snake
    case 'top':
      return snake
    case 'bottom':
      return snake
    default:
      return snake;
  };
}

export const snake = {
  move,
  expand,
}


// const expand = (snake: Snake, direction: Direction) => {
// const [x, y] = positionHead(snake, direction);

// switch (direction) {
//   case 'right':
//     return right(x, y, snake);
//   case 'left':
//     return left(x, y, snake);
//   case 'top':
//     return top(x, y, snake);
//   case 'bottom':
//     return bottom(x, y, snake);
//   default:
// return snake;
// };
// }


// const bottom = (x: number, y: number, snake: Snake) => {
//   return snake.map((col, i) => {
//     if (i > 0) {
//       if (snake[i - 1][y].position === 0) {
//         return col.map((_, j) => {
//           if (j === y) {
//             return {
//               position: 0
//             }
//           }
//           return {
//             position: -1
//           }
//         });
//       }

//       return col.map((_, j) => {
//         return {
//           position: -1
//         };
//       });

//     } else {
//       if (snake[snake.length - 1][y].position === 0) {
//         return col.map((_, j) => {
//           if (j === y) {
//             return {
//               position: 0
//             }
//           }
//           return {
//             position: -1
//           }
//         });
//       }

//       return col.map((_, j) => {
//         return {
//           position: -1
//         };
//       });
//     }
//   })
// };

// const top = (x: number, y: number, snake: Snake) =>
//   snake.map((col, i) => {
//     if (i < snake.length - 1) {
//       if (snake[i + 1][y].position === 0) {
//         return col.map((_, j) => {
//           if (j === y) {
//             return {
//               position: 0
//             }
//           }
//           return {
//             position: -1
//           }
//         });
//       }

//       return col.map((_, j) => {
//         return {
//           position: -1
//         };
//       });

//     } else {
//       if (snake[0][y].position === 0) {
//         return col.map((_, j) => {
//           if (j === y) {
//             return {
//               position: 0
//             }
//           }
//           return {
//             position: -1
//           }
//         });
//       }

//       return col.map((_, j) => {
//         return {
//           position: -1
//         };
//       });
//     }
//   });

// retornar a cabeça da cobra
// const positionHead = (matrix: Snake, direction: Direction) =>
//   matrix.reduce((acc, value, i) => {
//     if (direction === 'right') {
//       // @TODO melhorar aqui

//       const head = value.reduce((ac, valuee, j) => {
//         if (valuee.position === 0) {
//           return j
//         }
//         return ac;
//       }, -1);

//       if (head > -1) {
//         return [i, head];
//       }
//       return acc;

//     }

//     const head = value.findIndex((row) => row.position === 0);
//     if (head > -1) {
//       return [i, head];
//     }
//     return acc;
//   }, [-1, -1]);

// const left = (x: number, y: number, snake: Snake) =>
//   snake.map((col, i) => {
//     if (i === x) {
//       return col.map((_, j) => {
//         if (j < col.length - 1) {
//           if (col[j + 1].position === 0) {
//             return {
//               position: 0
//             }
//           }
//           return {
//             position: -1
//           }
//         } else {
//           if (col[0].position === 0) {
//             return {
//               position: 0
//             }
//           }
//           return {
//             position: -1
//           }
//         }
//       });
//     }
//     return col;
//   });


// const left = (snake: Snake): Snake =>
//   snake.map((position, i) => [position[0], position[1] - 1]


// if (x === i) {
//   return col.map((_, j) => {
//     if (j > 0) {
//       if (col[j - 1].position === 0) {
//         return {
//           position: 0
//         }
//       }
//       return {
//         position: -1
//       }
//     } else {
//       if (col[col.length - 1].position === 0) {
//         return {
//           position: 0
//         }
//       }
//       return {
//         position: -1
//       }
//     }
//   });
// }
// return col;

