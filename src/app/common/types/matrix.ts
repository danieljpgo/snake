export type Status = 'unfill' | 'fill' | 'snake';

export interface Cell {
  status: Status;
}
export type Matrix = Cell[][];