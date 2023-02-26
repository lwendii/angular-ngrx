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
import { MaterialModule } from './_shared/material/material.module';
import { DataTableComponent } from './table-example/components/data-table/data-table.component';
import { ErrorComponent } from './table-example/components/error/error.component';
import { SpinnerComponent } from './table-example/components/spinner/spinner.component';
import { DataTableModule } from './table-example/store/data-table/data-table.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    AutoLogoutComponent,
    MyCounterComponent,
    LoginPageComponent,
    MoviesPageComponent,
    DataTableComponent,
    ErrorComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      count: counterReducer,
      game: scoreboardReducer,
    }),
    ScoreboardModule,
    EffectsModule.forRoot([MovieEffects]),
    MaterialModule,
    DataTableModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
