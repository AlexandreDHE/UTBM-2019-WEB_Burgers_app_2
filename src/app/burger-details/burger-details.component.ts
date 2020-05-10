import { Component, OnInit, Input } from '@angular/core';
import { BurgerService } from '../services/burger.service';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {

  @Input() id:number;
  @Input() name:string;
  @Input() price:number;
  @Input() image:string;
  @Input() nutriscore:string;
  @Input() nutriments:object;

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {}

}
