import { Component, Inject, OnInit } from '@angular/core';
import { StateChangeService } from '../state-change.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
})
export class GameOverComponent implements OnInit {
  constructor(
    public stateChange: StateChangeService,
    @Inject(MAT_DIALOG_DATA) public data: { victory: boolean }
  ) {}

  ngOnInit(): void {}

  retry() {
    this.stateChange.retry.next();
  }

  menu() {
    this.stateChange.showMenu.next();
  }
}
