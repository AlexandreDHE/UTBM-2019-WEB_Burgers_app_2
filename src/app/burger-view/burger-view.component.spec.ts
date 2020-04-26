import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerViewComponent } from './burger-view.component';

describe('BurgerViewComponent', () => {
  let component: BurgerViewComponent;
  let fixture: ComponentFixture<BurgerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
