import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateChangeService } from '../state-change.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  @Input() value!: number;
  @Input() coordinates!: number[];
  @Output() correct = new EventEmitter<boolean>();

  gameOver = false;
  clicked = false;
  rightClicked: string | null = null;

  constructor(public stateChange: StateChangeService) {
    this.stateChange.explode.subscribe(() => {
      this.gameOver = true;
    });

    this.stateChange.retry.subscribe(() => {
      this.gameOver = false;
      this.clicked = false;
      this.rightClicked = null;
    });

    this.stateChange.zeroClicked.subscribe((zero) => {
      const y = zero[0];
      const x = zero[1];
      const myY = this.coordinates[0];
      const myX = this.coordinates[1];
      if (
        !this.clicked &&
        !this.rightClicked &&
        (Math.abs(y - myY) == 0 || Math.abs(y - myY) == 1) &&
        (Math.abs(x - myX) == 0 || Math.abs(x - myX) == 1) &&
        this.value != -1
      ) {
        this.clicked = true;
        if (this.value == 0) {
          this.stateChange.zeroClicked.next(this.coordinates);
        }
      }
    });
  }

  ngOnInit(): void {}

  tileClicked() {
    if (this.value == -1) {
      this.stateChange.explode.next();
    } else if (this.value == 0) {
      this.stateChange.zeroClicked.next(this.coordinates);
    }

    this.clicked = !this.rightClicked && true;
  }

  rightClick(ev: Event) {
    ev.preventDefault();
    this.rightClicked = this.clicked
      ? null
      : this.rightClicked == 'M'
      ? '?'
      : this.rightClicked == '?'
      ? null
      : 'M';

    if (this.rightClicked && this.value == -1) {
      this.correct.emit(this.rightClicked == 'M');
    }
  }
}
