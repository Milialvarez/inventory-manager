import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryToggleFilterComponent } from './inventory-toggle-filter.component';

describe('InventoryToggleFilterComponent', () => {
  let component: InventoryToggleFilterComponent;
  let fixture: ComponentFixture<InventoryToggleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryToggleFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryToggleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
