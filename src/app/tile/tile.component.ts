import { Component, Input, OnInit } from '@angular/core';
import { StateChangeService } from '../state-change.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  @Input() value!: number;

  gameOver = false;
  clicked = false;
  rightClicked: string | null = null;

  constructor(public stateChange: StateChangeService) {
    this.stateChange.explode.subscribe(() => {
      this.gameOver = true;
    });
  }

  ngOnInit(): void {}

  tileClicked() {
    if (this.value == -1) {
      this.stateChange.explode.next();
    }
    this.clicked = !this.rightClicked && true;
    //TODO: show any other nearby 0's and their neighbors
  }

  rightClick(ev: Event) {
    ev.preventDefault();
    this.rightClicked = this.clicked
      ? null
      : this.rightClicked == 'M' //TODO: show a flag to distinguish a marked mine
      ? '?'
      : this.rightClicked == '?'
      ? null
      : 'M';
  }
}
