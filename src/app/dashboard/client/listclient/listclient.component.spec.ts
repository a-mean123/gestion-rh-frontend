import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclientComponent } from './listclient.component';

describe('ListclientComponent', () => {
  let component: ListclientComponent;
  let fixture: ComponentFixture<ListclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
