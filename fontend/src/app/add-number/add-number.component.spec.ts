import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumberComponent } from './add-number.component';

describe('AddNumberComponent', () => {
  let component: AddNumberComponent;
  let fixture: ComponentFixture<AddNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
