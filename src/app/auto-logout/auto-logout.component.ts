import { Component } from '@angular/core';
import { AutoLogoutService } from './auto-logout.service';

@Component({
  selector: 'app-auto-logout',
  templateUrl: './auto-logout.component.html',
  styleUrls: ['./auto-logout.component.scss'],
})
export class AutoLogoutComponent {
  constructor(private autoLogoutService: AutoLogoutService) {
    localStorage.setItem('lastAction', Date.now().toString());
  }
}
