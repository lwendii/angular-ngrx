import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { AutoLogoutComponent } from './auto-logout/auto-logout.component';
import { counterReducer } from './counter/counter.reducer';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { scoreboardReducer } from './scoreboard/new/scoreboard.reducer';
import { MoviesPageComponent } from './movies/movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movies/movie.effecs';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    AutoLogoutComponent,
    MyCounterComponent,
    LoginPageComponent,
    MoviesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      count: counterReducer,
      game: scoreboardReducer,
    }),
    ScoreboardModule,
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
