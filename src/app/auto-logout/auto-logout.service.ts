import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const MINUTES_UNITL_AUTO_LOGOUT = 1; // in mins
const CHECK_INTERVAL = 15000; // in ms
const STORE_KEY = 'lastAction';
@Injectable({
  providedIn: 'root',
})
export class AutoLogoutService {
  constructor(private router: Router) {
    console.log('object created');
    // this.auth = authService;
    this.check();
    this.initListener();
    this.initInterval();
    // localStorage.setItem(STORE_KEY,Date.now().toString());
  }

  public getLastAction() {
    const lastAction = localStorage.getItem(STORE_KEY);
    if (lastAction) return parseInt(lastAction);
    return 0;
  }
  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  removeListener() {
    document.body.removeEventListener('click', () => this.reset());
    document.body.removeEventListener('mouseover', () => this.reset());
    document.body.removeEventListener('mouseout', () => this.reset());
    document.body.removeEventListener('keydown', () => this.reset());
    document.body.removeEventListener('keyup', () => this.reset());
    document.body.removeEventListener('keypress', () => this.reset());
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const timeleft =
      this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    // if (isTimeout && this.auth.loggedIn)
    if (isTimeout) {
      // alert('logout');
      // localStorage.clear();
      // this.router.navigate(['./login']);
      this.removeListener();
      if (window.confirm(`Logout starte timer neu? ${diff}`)) {
        this.initListener();
      }
    }
  }
}
