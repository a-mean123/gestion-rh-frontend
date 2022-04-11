import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedepComponent } from './updatedep.component';

describe('UpdatedepComponent', () => {
  let component: UpdatedepComponent;
  let fixture: ComponentFixture<UpdatedepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
