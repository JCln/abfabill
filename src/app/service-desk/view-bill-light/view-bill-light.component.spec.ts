import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillLightComponent } from './view-bill-light.component';

describe('ViewBillLightComponent', () => {
  let component: ViewBillLightComponent;
  let fixture: ComponentFixture<ViewBillLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBillLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBillLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
