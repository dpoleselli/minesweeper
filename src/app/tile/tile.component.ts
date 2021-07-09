import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  @Input() value!: number;
  @Output() explode = new EventEmitter<undefined>();

  clicked = false;
  rightClicked: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  tileClicked() {
    if (this.value == -1) {
      this.explode.emit();
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
