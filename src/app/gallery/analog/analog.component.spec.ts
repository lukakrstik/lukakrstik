import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogComponent } from './analog.component';

describe('AnalogComponent', () => {
  let component: AnalogComponent;
  let fixture: ComponentFixture<AnalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
