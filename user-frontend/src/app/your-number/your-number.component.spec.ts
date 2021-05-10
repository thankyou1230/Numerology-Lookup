import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourNumberComponent } from './your-number.component';

describe('YourNumberComponent', () => {
  let component: YourNumberComponent;
  let fixture: ComponentFixture<YourNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
