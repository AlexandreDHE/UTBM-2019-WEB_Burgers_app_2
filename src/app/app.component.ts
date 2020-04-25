import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from './services/api/burgers.service';
import { Observable } from 'rxjs';
export { Subscribable, SubscribableOrPromise, ObservableInput, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Burgers';
  burgers: any[];

  constructor(private buergerService: BurgersService){}

  ngOnInit() {
    let burgers = this.buergerService.listBurgers().subscribe( (value) => {
      this.burgers = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    });
  }
}
