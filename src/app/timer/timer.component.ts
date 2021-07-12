import { Component, OnInit } from '@angular/core';
import { StateChangeService } from '../state-change.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  time = 0;
  interval: any = null;
  constructor(public stateChange: StateChangeService) {
    this.interval = setInterval(() => {
      this.time += 1;
    }, 1000);

    this.stateChange.explode.subscribe(() => {
      clearInterval(this.interval);
    });

    this.stateChange.retry.subscribe(() => {
      this.time = 0;
      this.interval = setInterval(() => {
        this.time += 1;
      }, 1000);
    });
  }

  ngOnInit(): void {}

  get minutes() {
    return Math.floor(this.time / 60)
      .toString()
      .padStart(2, '0');
  }

  get seconds() {
    return (this.time % 60).toString().padStart(2, '0');
  }
}
