import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbillIdComponent } from './viewbill-id.component';

describe('ViewbillIdComponent', () => {
  let component: ViewbillIdComponent;
  let fixture: ComponentFixture<ViewbillIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbillIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbillIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
