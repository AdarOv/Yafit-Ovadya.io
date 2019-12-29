import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbuttonComponent } from './nbutton.component';

describe('NbuttonComponent', () => {
  let component: NbuttonComponent;
  let fixture: ComponentFixture<NbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
