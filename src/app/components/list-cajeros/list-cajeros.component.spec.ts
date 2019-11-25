import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCajerosComponent } from './list-cajeros.component';

describe('ListCajerosComponent', () => {
  let component: ListCajerosComponent;
  let fixture: ComponentFixture<ListCajerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCajerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
