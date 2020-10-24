export const direction = {
  top: 'w',
  left: 'a',
  bottom: 's',
  right: 'd',
} as const;

export type Direction = keyof typeof direction;
export type Keyboard = typeof direction[keyof typeof direction];