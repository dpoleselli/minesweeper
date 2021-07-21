import { Component } from '@angular/core';
import { StateChangeService } from './services/state-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showGame = false;
  width: number | null = null;
  height: number | null = null;
  mines: number | null = null;

  selected(dimensions: { width: number; height: number; mines: number }) {
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.mines = dimensions.mines;
    this.showGame = true;
  }

  constructor(public stateChange: StateChangeService) {
    this.stateChange.showMenu.subscribe(() => {
      this.showGame = false;
      this.width = null;
      this.height = null;
      this.mines = null;
    });
  }
}
