import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepComponent } from './listdep.component';

describe('ListdepComponent', () => {
  let component: ListdepComponent;
  let fixture: ComponentFixture<ListdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
