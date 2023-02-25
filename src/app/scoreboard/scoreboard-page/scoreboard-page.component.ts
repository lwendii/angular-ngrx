import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  IncrementAway,
  IncrementHome,
  Reset,
} from '../old/scoreboard-page.actions';

@Component({
  selector: 'app-scoreboard-page',
  templateUrl: './scoreboard-page.component.html',
  styleUrls: ['./scoreboard-page.component.scss'],
})
export class ScoreboardPageComponent {
  home$: any;

  constructor(private store: Store<{ home: number; away: number }>) {
    // this.home$ = store.select('game');
  }

  public incrementHome() {
    this.store.dispatch(new IncrementHome());
    console.log('home', this.home$);
  }

  public incrementAway() {
    this.store.dispatch(new IncrementAway());
  }

  public reset() {
    this.store.dispatch(new Reset({ home: 0, away: 0 }));
  }
}
