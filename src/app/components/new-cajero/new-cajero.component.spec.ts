import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCajeroComponent } from './new-cajero.component';

describe('NewCajeroComponent', () => {
  let component: NewCajeroComponent;
  let fixture: ComponentFixture<NewCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
