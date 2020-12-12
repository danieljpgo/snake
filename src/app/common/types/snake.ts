import { Direction } from "./direction";

export type Snake = Body[];

export type Body = {
  x: number;
  y: number;
  head?: boolean;
  direction: Direction
}