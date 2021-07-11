import { Component, OnInit } from '@angular/core';
import { StateChangeService } from '../state-change.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
})
export class GameOverComponent implements OnInit {
  constructor(public stateChange: StateChangeService) {}

  ngOnInit(): void {}

  retry() {
    this.stateChange.retry.next();
  }

  menu() {
    this.stateChange.showMenu.next();
  }
}
