import colors from './color';

const unit = 16;

const theme = {
  unit,
  colors: {
    snake: colors.green['100'],
    cell: colors.black,
    food: colors.purple['200'],
    text: {
      base: colors.black,
    },
  },

  shapes: {
    borderRadius: unit / 2,
  },
};

export default theme;