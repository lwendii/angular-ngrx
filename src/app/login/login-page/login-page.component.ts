import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../new/login-page.actions';
import { Login } from '../old/login-page.actionts';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private store: Store<Login>) {}

  // version 7 and older
  click(username: string, password: string) {
    this.store.dispatch(new Login({ username: username, password: password }));
  }

  // latest ngrx
  onSubmit(username: string, password: string) {
    this.store.dispatch(login({ username: username, password: password }));
  }
}
