import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { BooksService } from './book-list/books.service';
import { BooksApiActions, BooksActions } from './state/books.action';
import { selectBooks, selectBookCollection } from './state/books.selectors';
import { DataTableState } from './table-example/models/data-table';
import { DataService } from './table-example/service/data.service';
import { setFilterBy } from './table-example/store/data-table/data-table.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  // data-table
  data$!: any;
  headerRow = [
    { displayName: 'ID', key: 'id', hasSort: false },
    { displayName: 'Name', key: 'name', hasSort: true },
    { displayName: 'Username', key: 'username', hasSort: false },
    { displayName: 'City', key: 'city', hasSort: true },
  ];
  searchControl = new FormControl('');

  constructor(
    private booksService: BooksService,
    private store: Store,
    private dataService: DataService,
    private tableStore: Store<DataTableState>
  ) {}

  ngOnInit(): void {
    this.data$ = this.dataService.getUsers().pipe(startWith(null));
    this.searchControl.valueChanges
      .pipe(map((query) => query!.toLowerCase()))
      .subscribe((query) => {
        console.log(query);
        this.store.dispatch(
          setFilterBy({ filters: { filterBy: ['name', 'city'], query } })
        );
      });

    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
