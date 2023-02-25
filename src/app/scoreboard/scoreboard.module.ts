import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from './old/scoreboard.reducer';
import { ScoreboardPageComponent } from './scoreboard-page/scoreboard-page.component';

@NgModule({
  imports: [BrowserModule, StoreModule.forFeature('game', scoreboardReducer)],
  declarations: [ScoreboardPageComponent],
  exports: [ScoreboardPageComponent],
})
export class ScoreboardModule {}
