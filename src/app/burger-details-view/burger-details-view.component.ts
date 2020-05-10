import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from '../services/api/burgers.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
export { Subscribable, SubscribableOrPromise, ObservableInput, Subscription } from 'rxjs';

@Component({
  selector: 'app-burger-details-view',
  templateUrl: './burger-details-view.component.html',
  styleUrls: ['./burger-details-view.component.css']
})
export class BurgerDetailsViewComponent implements OnInit {

  burger_details: object;
  @Input() id: number;

  constructor(private buergerService: BurgersService, private route: ActivatedRoute, private authService: AuthService) { }

  authStatus: boolean = this.authService.isAuth;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.burger_details = this.buergerService.burgerDetail(this.id).subscribe((value) => {
      this.burger_details = value;
      console.log(this.burger_details);
    },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
        console.log(this.id);
      });
  }
}
