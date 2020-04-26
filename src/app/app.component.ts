import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from './services/api/burgers.service';
export { Subscribable, SubscribableOrPromise, ObservableInput, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Burgers';

  constructor(){}

}
