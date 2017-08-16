import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOrderComponent } from './buy-order.component';

describe('BuyOrderComponent', () => {
  let component: BuyOrderComponent;
  let fixture: ComponentFixture<BuyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
