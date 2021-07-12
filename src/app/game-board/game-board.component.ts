import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameOverComponent } from '../game-over/game-over.component';
import { MineGeneratorService } from '../mine-generator.service';
import { StateChangeService } from '../state-change.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  providers: [MineGeneratorService],
})
export class GameBoardComponent implements OnInit {
  grid: number[][] = [];
  exploded = false;
  constructor(
    private generator: MineGeneratorService,
    public stateChange: StateChangeService,
    public dialog: MatDialog
  ) {
    this.stateChange.explode.subscribe(() => {
      this.dialog.open(GameOverComponent, {
        hasBackdrop: false,
        panelClass: 'dialog-container-custom',
      });
    });

    this.stateChange.retry.subscribe(() => {
      this.grid = this.grid.splice(0, this.grid.length);
      this.grid = this.generator.generate(this.width, this.height, this.mines);
    });
  }

  //TODO: handle winning
  ngOnInit(): void {
    this.grid = this.generator.generate(this.width, this.height, this.mines);
  }

  @Input() width!: number;
  @Input() height!: number;
  @Input() mines!: number;

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
