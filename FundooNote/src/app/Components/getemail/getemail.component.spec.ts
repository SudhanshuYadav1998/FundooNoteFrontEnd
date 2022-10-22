import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetemailComponent } from './getemail.component';

describe('GetemailComponent', () => {
  let component: GetemailComponent;
  let fixture: ComponentFixture<GetemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
