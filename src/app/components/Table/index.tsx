import React from 'react';
import Cell from './Cell';

const size = 100;
const table = Array.from({ length: size }, (v, k) => k);

const Table = () => {
  console.log(table)

  return (
    <div style={{ display: 'grid', gap: 6, gridTemplateColumns: `repeat(${size / 10}, 32px)`, gridTemplateRows: `repeat(${size / 10}, 32px)` }}>
      {table.map((cell) => (
        <Cell key={cell}></Cell>)
      )}
    </div>
  )
}

export default Table;