import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallWorksComponent } from './small-works.component';

describe('SmallWorksComponent', () => {
  let component: SmallWorksComponent;
  let fixture: ComponentFixture<SmallWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
