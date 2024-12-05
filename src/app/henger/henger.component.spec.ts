import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HengerComponent } from './henger.component';

describe('HengerComponent', () => {
  let component: HengerComponent;
  let fixture: ComponentFixture<HengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HengerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
