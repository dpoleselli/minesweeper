import { Component } from '@angular/core';
import { StateChangeService } from '../services/state-change.service';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css'],
})
export class GameMenuComponent {
  constructor(public stateChange: StateChangeService) {}

  startOver() {
    this.stateChange.retry.next();
  }

  menu() {
    this.stateChange.showMenu.next();
  }
}
