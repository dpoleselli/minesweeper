import { Component, Input, OnInit } from '@angular/core';
import { MineGeneratorService } from '../mine-generator.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  providers: [MineGeneratorService],
})
export class GameBoardComponent implements OnInit {
  grid: number[][] = [];
  //TODO: display some overlay showing "you lost" and option to start a new game
  //also show how the board actually looked
  exploded = false;
  constructor(private service: MineGeneratorService) {}

  ngOnInit(): void {
    this.grid = this.service.generate(this.width, this.height, 5);
  }

  @Input() width!: number;
  @Input() height!: number;

  get xArray() {
    return Array(this.width)
      .fill(0)
      .map((x, i) => i);
  }

  get yArray() {
    return Array(this.height)
      .fill(0)
      .map((x, i) => i);
  }
}
