import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from './services/api/burgers.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
export { Subscribable, SubscribableOrPromise, ObservableInput, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Burgers';

}
