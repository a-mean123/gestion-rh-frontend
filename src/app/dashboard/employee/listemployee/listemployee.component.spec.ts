import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployeeComponent } from './listemployee.component';

describe('ListemployeeComponent', () => {
  let component: ListemployeeComponent;
  let fixture: ComponentFixture<ListemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
