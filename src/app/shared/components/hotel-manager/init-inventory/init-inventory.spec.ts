import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitInventory } from './init-inventory';

describe('InitInventory', () => {
  let component: InitInventory;
  let fixture: ComponentFixture<InitInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
