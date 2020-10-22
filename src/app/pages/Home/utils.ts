import { Snake } from "../../common/types/snake";

export const left = (x: number, y: number, snake: Snake) => {

  return snake.map((col, i) => {
    if (i === x) {
      return col.map((row, j) => {
        if (j === (col.length - 1) && y === 0) {
          return {
            position: 0
          };
        }
        if (y === j) {
          return {
            position: -1
          };
        }
        if ((y - 1) === j) {
          return {
            position: 0
          };
        }
        return row;
      });
    }
    return col;
  });
};

export const right = (x: number, y: number, snake: Snake) => {

  return snake.map((col, i) => {
    if (i === x) {
      return col.map((row, j) => {
        if (j === 0 && y === (col.length - 1)) {
          return {
            position: 0
          };
        }
        if (y === j) {
          return {
            position: -1
          };
        }
        if ((y + 1) === j) {
          return {
            position: 0
          };
        }
        return row;
      });
    }
    return col;
  });
};

export const bottom = (x: number, y: number, snake: Snake) => {

  return snake.map((col, i) => {
    if (i === 0 && x === (snake.length - 1)) {
      return col.map((row, j) => {
        if (j === 0 && y === (col.length - 1)) {
          return {
            position: 0
          };
        }
        if (j === y) {
          return {
            position: 0
          };
        }
        return row;
      });
    }

    if (x === i) {
      return col.map((row, j) => {
        if (y === j) {
          return {
            position: -1
          };
        }
        return row;
      });
    }

    if ((x + 1) === i) {
      return col.map((row, j) => {
        if (y === j) {
          return {
            position: 0
          };
        }
        return row;
      });
    }

    return col;
  });
};

export const top = (x: number, y: number, snake: Snake) => {

  return snake.map((col, i) => {
    if (i === (snake.length - 1) && x === 0) {
      return col.map((row, j) => {
        if (j === (col.length - 1) && y === 0) {
          return {
            position: 0
          };
        }
        if (j === y) {
          return {
            position: 0
          };
        }
        return row;
      });
    }

    if (x === i) {
      return col.map((row, j) => {
        if (y === j) {
          return {
            position: -1
          };
        }
        return row;
      });
    }

    if ((x - 1) === i) {
      return col.map((row, j) => {
        if (y === j) {
          return {
            position: 0
          };
        }
        return row;
      });
    }

    return col;
  });
};
