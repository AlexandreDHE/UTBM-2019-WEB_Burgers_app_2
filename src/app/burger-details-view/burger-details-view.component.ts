import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from '../services/api/burgers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burger-details-view',
  templateUrl: './burger-details-view.component.html',
  styleUrls: ['./burger-details-view.component.css']
})
export class BurgerDetailsViewComponent implements OnInit {

  burger_details:object;
  id: number;

  constructor(private buergerService: BurgersService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; 
    /*let burger_details = this.buergerService.burgerDetail(this.id).subscribe( (value) => {
      this.burger_details = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    });*/
  }
}
