import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDetailsComponent } from './burger-details.component';

describe('BurgerDetailsComponent', () => {
  let component: BurgerDetailsComponent;
  let fixture: ComponentFixture<BurgerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
