import { Snake } from '../../common/types/snake';
import { Direction } from '../../common/types/direction';

const right = (snake: Snake, direction: Direction, size: number): Snake => {
  const firstIndex = 0;
  const lastPosition = size - 1;

  const snakeInverted = [...snake].reverse()

  if (snakeInverted[firstIndex].direction !== direction) {
    return [...snakeInverted.map((body, index) => {
      if (index === firstIndex) {
        return {
          ...body,
          y: body.y === lastPosition ? 0 : body.y + 1,
          direction: direction,
        }
      }
      return {
        x: snakeInverted[index - 1].direction === 'bottom'
          ? body.x === lastPosition
            ? 0 : body.x + 1
          : snakeInverted[index - 1].direction === 'top'
            ? body.x === lastPosition
              ? 0 : body.x - 1
            : body.x,
        y: snakeInverted[index - 1].direction === 'right'
          ? body.y === lastPosition
            ? 0 : body.y + 1
          : snakeInverted[index - 1].direction === 'left'
            ? body.y === lastPosition
              ? 0 : body.y - 1
            : body.y,
        direction: snakeInverted[index - 1].direction,
      }
    })].reverse();
  }


  const newSnakeInverted = snakeInverted.map((body, index) => {
    if (index === firstIndex) {
      return {
        ...body,
        x: body.direction === 'bottom'
          ? body.x === lastPosition
            ? 0 : body.x + 1
          : body.direction === 'top'
            ? body.x === lastPosition
              ? 0 : body.x - 1
            : body.x,
        y: body.direction === 'right'
          ? body.y === lastPosition
            ? 0 : body.y + 1
          : body.direction === 'left'
            ? body.y === lastPosition
              ? 0 : body.y - 1
            : body.y,
      }
    }
    return {
      x: snakeInverted[index - 1].direction === 'bottom'
        ? body.x === lastPosition
          ? 0 : body.x + 1
        : snakeInverted[index - 1].direction === 'top'
          ? body.x === lastPosition
            ? 0 : body.x - 1
          : body.x,
      y: snakeInverted[index - 1].direction === 'right'
        ? body.y === lastPosition
          ? 0 : body.y + 1
        : snakeInverted[index - 1].direction === 'left'
          ? body.y === lastPosition
            ? 0 : body.y - 1
          : body.y,
      direction: snakeInverted[index - 1].direction,
    }
  });

  return [...newSnakeInverted].reverse();
}

const left = (snake: Snake, direction: Direction, size: number): Snake => {
  const firstIndex = 0;
  const firstPosition = 0;
  const lastPosition = size - 1;

  const snakeInverted = [...snake].reverse()

  if (snakeInverted[firstIndex].direction !== direction) {
    return [...snakeInverted.map((body, index) => {
      if (index === firstIndex) {
        return {
          ...body,
          y: body.y === firstPosition ? lastPosition : body.y - 1,
          direction: direction,
        }
      }
      return {
        x: snakeInverted[index - 1].direction === 'bottom'
          ? body.x === firstPosition
            ? lastPosition : body.x + 1
          : snakeInverted[index - 1].direction === 'top'
            ? body.x === firstPosition
              ? lastPosition : body.x - 1
            : body.x,
        y: snakeInverted[index - 1].direction === 'right'
          ? body.y === firstPosition
            ? lastPosition : body.y + 1
          : snakeInverted[index - 1].direction === 'left'
            ? body.y === firstPosition
              ? lastPosition : body.y - 1
            : body.y,
        direction: snakeInverted[index - 1].direction,
      }
    })].reverse();
  }

  const newSnakeInverted = snakeInverted.map((body, index) => {
    if (index === firstIndex) {
      return {
        ...body,
        x: body.direction === 'bottom'
          ? body.x === firstPosition
            ? lastPosition : body.x + 1
          : body.direction === 'top'
            ? body.x === firstPosition
              ? lastPosition : body.x - 1
            : body.x,
        y: body.direction === 'right'
          ? body.y === firstPosition
            ? lastPosition : body.y + 1
          : body.direction === 'left'
            ? body.y === firstPosition
              ? lastPosition : body.y - 1
            : body.y,
      }
    }
    return {
      x: snakeInverted[index - 1].direction === 'bottom'
        ? body.x === firstPosition
          ? lastPosition : body.x + 1
        : snakeInverted[index - 1].direction === 'top'
          ? body.x === firstPosition
            ? lastPosition : body.x - 1
          : body.x,
      y: snakeInverted[index - 1].direction === 'right'
        ? body.y === firstPosition
          ? lastPosition : body.y + 1
        : snakeInverted[index - 1].direction === 'left'
          ? body.y === firstPosition
            ? lastPosition : body.y - 1
          : body.y,
      direction: snakeInverted[index - 1].direction,
    }
  });

  return [...newSnakeInverted].reverse();
}

const bottom = (snake: Snake, direction: Direction, size: number): Snake => {
  const firstIndex = 0;
  const lastPosition = size - 1;

  const snakeInverted = [...snake].reverse()

  if (snakeInverted[firstIndex].direction !== direction) {
    return [...snakeInverted.map((body, index) => {
      if (index === firstIndex) {
        return {
          ...body,
          x: body.x === lastPosition ? 0 : body.x + 1,
          direction: direction,
        }
      }
      return {
        x: snakeInverted[index - 1].direction === 'bottom'
          ? body.x === lastPosition
            ? 0 : body.x + 1
          : snakeInverted[index - 1].direction === 'top'
            ? body.x === lastPosition
              ? 0 : body.x - 1
            : body.x,
        y: snakeInverted[index - 1].direction === 'right'
          ? body.y === lastPosition
            ? 0 : body.y + 1
          : snakeInverted[index - 1].direction === 'left'
            ? body.y === lastPosition
              ? 0 : body.y - 1
            : body.y,
        direction: snakeInverted[index - 1].direction,
      }
    })].reverse();
  }

  const newSnakeInverted = snakeInverted.map((body, index) => {
    if (index === firstIndex) {
      return {
        ...body,
        x: body.direction === 'bottom'
          ? body.x === lastPosition
            ? 0 : body.x + 1
          : body.direction === 'top'
            ? body.x === lastPosition
              ? 0 : body.x - 1
            : body.x,
        y: body.direction === 'right'
          ? body.y === lastPosition
            ? 0 : body.y + 1
          : body.direction === 'left'
            ? body.y === lastPosition
              ? 0 : body.y - 1
            : body.y,
      };
    }
    return {
      x: snakeInverted[index - 1].direction === 'bottom'
        ? body.x === lastPosition
          ? 0 : body.x + 1
        : snakeInverted[index - 1].direction === 'top'
          ? body.x === lastPosition
            ? 0 : body.x - 1
          : body.x,
      y: snakeInverted[index - 1].direction === 'right'
        ? body.y === lastPosition
          ? 0 : body.y + 1
        : snakeInverted[index - 1].direction === 'left'
          ? body.y === lastPosition
            ? 0 : body.y - 1
          : body.y,
      direction: snakeInverted[index - 1].direction,

    }
  });

  return [...newSnakeInverted].reverse();
}

const top = (snake: Snake, direction: Direction, size: number): Snake => {
  const firstIndex = 0;
  const firstPosition = 0;
  const lastPosition = size - 1;

  const snakeInverted = [...snake].reverse()

  if (snakeInverted[firstIndex].direction !== direction) {
    return [...snakeInverted.map((body, index) => {
      if (index === firstIndex) {
        return {
          ...body,
          x: body.x === firstPosition ? lastPosition : body.x - 1,
          direction: direction,
        }
      }
      return {
        x: snakeInverted[index - 1].direction === 'bottom'
          ? body.x === firstPosition
            ? lastPosition : body.x + 1
          : snakeInverted[index - 1].direction === 'top'
            ? body.x === firstPosition
              ? lastPosition : body.x - 1
            : body.x,
        y: snakeInverted[index - 1].direction === 'right'
          ? body.y === firstPosition
            ? lastPosition : body.y + 1
          : snakeInverted[index - 1].direction === 'left'
            ? body.y === firstPosition
              ? lastPosition : body.y - 1
            : body.y,
        direction: snakeInverted[index - 1].direction,
      }
    })].reverse();
  }

  const newSnakeInverted = snakeInverted.map((body, index) => {
    if (index === firstIndex) {
      return {
        ...body,
        x: body.direction === 'bottom'
          ? body.x === firstPosition
            ? lastPosition : body.x + 1
          : body.direction === 'top'
            ? body.x === firstPosition
              ? lastPosition : body.x - 1
            : body.x,
        y: body.direction === 'right'
          ? body.y === firstPosition
            ? lastPosition : body.y + 1
          : body.direction === 'left'
            ? body.y === firstPosition
              ? lastPosition : body.y - 1
            : body.y,
      };
    }
    return {
      x: snakeInverted[index - 1].direction === 'bottom'
        ? body.x === firstPosition
          ? lastPosition : body.x + 1
        : snakeInverted[index - 1].direction === 'top'
          ? body.x === firstPosition
            ? lastPosition : body.x - 1
          : body.x,
      y: snakeInverted[index - 1].direction === 'right'
        ? body.y === firstPosition
          ? lastPosition : body.y + 1
        : snakeInverted[index - 1].direction === 'left'
          ? body.y === firstPosition
            ? lastPosition : body.y - 1
          : body.y,
      direction: snakeInverted[index - 1].direction,

    }
  });

  return [...newSnakeInverted].reverse();
}

const move = (direction: Direction, snake: Snake, size: number) => {
  switch (direction) {
    case 'right':
      return right(snake, direction, size);
    case 'left':
      return left(snake, direction, size);
    case 'top':
      return top(snake, direction, size);
    case 'bottom':
      return bottom(snake, direction, size);
    default:
      return snake;
  };
};

const expand = (snake: Snake, direction: Direction, size: number): Snake => {
  switch (direction) {
    case 'right':
      return [
        {
          x: snake[0].x,
          y: snake[0].y === 0 ? size - 1 : snake[0].y - 1,
          direction: snake[0].direction,
        },
        ...snake,
      ];
    case 'bottom':
      return [
        {
          x: snake[0].x === 0 ? size - 1 : snake[0].x - 1,
          y: snake[0].y,
          direction: snake[0].direction,
        },
        ...snake,
      ]
    case 'left':
      return [
        {
          x: snake[0].x,
          y: snake[0].y === size - 1 ? 0 : snake[0].y + 1,
          direction: snake[0].direction,
        },
        ...snake,
      ]
    case 'top':
      return [
        {
          x: snake[0].x === size - 1 ? 0 : snake[0].x + 1,
          y: snake[0].y,
          direction: snake[0].direction,
        },
        ...snake,
      ]
    default:
      return snake;
  };
}

export const snake = {
  move,
  expand,
}
