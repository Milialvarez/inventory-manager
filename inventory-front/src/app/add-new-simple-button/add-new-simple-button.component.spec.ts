import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSimpleButtonComponent } from './add-new-simple-button.component';

describe('AddNewSimpleButtonComponent', () => {
  let component: AddNewSimpleButtonComponent;
  let fixture: ComponentFixture<AddNewSimpleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewSimpleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewSimpleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
