import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateChangeService {
  constructor() {}
  explode = new Subject<undefined>();
  showMenu = new Subject<undefined>();
  retry = new Subject<undefined>();
}
