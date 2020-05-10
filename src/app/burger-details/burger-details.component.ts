import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  @Input() image: string;
  @Input() nutriscore: string;
  @Input() nutriments: object;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void { }

}
