import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDetailsViewComponent } from './burger-details-view.component';

describe('BurgerDetailsViewComponent', () => {
  let component: BurgerDetailsViewComponent;
  let fixture: ComponentFixture<BurgerDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
