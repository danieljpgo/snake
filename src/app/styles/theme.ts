import colors from './color';

const unit = 16;

const theme = {
  unit,
  colors: {
    snake: colors.green,
    cell: colors.black,
    food: colors.purple,
    text: {
      base: colors.black,
    },
  },

  shapes: {
    borderRadius: unit / 2,
  },
} as const;

export default theme;