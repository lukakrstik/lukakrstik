import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagphotosComponent } from './tagphotos.component';

describe('TagphotosComponent', () => {
  let component: TagphotosComponent;
  let fixture: ComponentFixture<TagphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagphotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
