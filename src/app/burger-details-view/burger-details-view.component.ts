import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../services/api/burgers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burger-details-view',
  templateUrl: './burger-details-view.component.html',
  styleUrls: ['./burger-details-view.component.css']
})
export class BurgerDetailsViewComponent implements OnInit {

  burger_details:object =
  {
    "id": 0,
    "name": "veggie",
    "price": 10.5,
    "image": "https://www.sciencesetavenir.fr/assets/img/2019/11/12/cover-r4x3w1000-5dca94b06b23d-dc0704cb156eac5bf332fba736612897d8cc4d60-jpg.jpg",
    "nutriscore": "A",
    "nutriments": {
      "energy-kcal": 1100,
      "saturated-fat": 0.4
    }
  }

  id: number;
  name: string = this.burger_details['name'];
  price: number = this.burger_details['price'];
  image: string = this.burger_details['image'];
  nutriscore: string = this.burger_details['nutriscore'];
  nutriments: object = this.burger_details['nutriments'];

  constructor(private buergerService: BurgersService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; 
    /*let burger_details = this.buergerService.burgerDetail({this.id}).subscribe( (value) => {
      let burger_details = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    });*/
  }

}
