export const Direction = {
  top: 'w',
  left: 'a',
  bottom: 's',
  right: 'd',
} as const;

export type Key = keyof typeof Direction;
export type Value = typeof Direction[keyof typeof Direction];