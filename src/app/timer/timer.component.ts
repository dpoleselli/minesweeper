import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateChangeService } from '../services/state-change.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnDestroy {
  time = 0;
  interval: any = null;
  subscriptions: Subscription[] = [];

  constructor(public stateChange: StateChangeService) {
    this.interval = setInterval(() => {
      this.time += 1;
    }, 1000);

    this.subscriptions.push(
      this.stateChange.explode.subscribe(() => {
        clearInterval(this.interval);
      })
    );

    this.subscriptions.push(
      this.stateChange.victory.subscribe(() => {
        clearInterval(this.interval);
      })
    );

    this.subscriptions.push(
      this.stateChange.retry.subscribe(() => {
        clearInterval(this.interval);
        this.time = 0;
        this.interval = setInterval(() => {
          this.time += 1;
        }, 1000);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  get minutes() {
    return Math.floor(this.time / 60)
      .toString()
      .padStart(2, '0');
  }

  get seconds() {
    return (this.time % 60).toString().padStart(2, '0');
  }
}
