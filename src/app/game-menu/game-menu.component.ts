import { Component, OnInit } from '@angular/core';
import { StateChangeService } from '../state-change.service';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css'],
})
export class GameMenuComponent implements OnInit {
  constructor(public stateChange: StateChangeService) {}

  ngOnInit(): void {}

  startOver() {
    this.stateChange.retry.next();
  }

  menu() {
    this.stateChange.showMenu.next();
  }
}
