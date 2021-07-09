import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MineGeneratorService {
  grid: number[][] = [];
  width = 0;
  height = 0;
  mines = 0;

  generate(width: number, height: number, mines: number) {
    this.width = width;
    this.height = height;
    this.mines = mines;
    this.initialize_grid();
    this.set_mines();
    this.calculate_numbers();
    return this.grid;
  }

  initialize_grid() {
    for (let y = 0; y < this.height; y++) {
      const inner = new Array(this.width);
      this.grid.push(inner);
    }
  }

  set_mines() {
    for (let i = 0; i < this.mines; i++) {
      let x = -1;
      let y = -1;
      do {
        x = Math.floor(Math.random() * this.width);
        y = Math.floor(Math.random() * this.height);
      } while (x == -1 || y == -1 || this.get(x, y) == -1);
      this.set(x, y, -1);
    }
  }

  calculate_numbers() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.get(x, y) == -1) {
          continue;
        }
        let mines_around = 0;
        let locations = [
          [-1, -1],
          [0, -1],
          [1, 1],
          [-1, 0],
          [1, 0],
          [-1, 1],
          [0, 1],
          [1, 1],
        ];
        for (let loc of locations) {
          const dx = loc[0];
          const dy = loc[1];
          if (
            x + dx >= this.width ||
            x + dx < 0 ||
            y + dy >= this.height ||
            y + dy < 0
          ) {
            continue;
          }
          if (this.get(x + dx, y + dy) == -1) {
            mines_around += 1;
          }
        }
        this.set(x, y, mines_around);
      }
    }
  }

  get(x: number, y: number) {
    return this.grid[y][x];
  }

  set(x: number, y: number, value: number) {
    this.grid[y][x] = value;
  }
}
