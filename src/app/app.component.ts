import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showGame = false;
  width: number | null = null;
  height: number | null = null;

  selected(dimensions: { width: number; height: number }) {
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.showGame = true;
  }
}
