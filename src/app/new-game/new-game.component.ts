import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() gameSelected = new EventEmitter<{
    width: number;
    height: number;
  }>();

  click(width: number, height: number) {
    this.gameSelected.emit({ width, height });
  }
}
