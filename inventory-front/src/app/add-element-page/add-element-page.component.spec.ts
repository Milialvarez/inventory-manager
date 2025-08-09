import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementPageComponent } from './add-element-page.component';

describe('AddElementPageComponent', () => {
  let component: AddElementPageComponent;
  let fixture: ComponentFixture<AddElementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddElementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddElementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
