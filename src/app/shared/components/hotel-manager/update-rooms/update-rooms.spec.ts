import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRooms } from './update-rooms';

describe('UpdateRooms', () => {
  let component: UpdateRooms;
  let fixture: ComponentFixture<UpdateRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRooms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRooms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
