import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElcServicesComponent } from './elc-services.component';

describe('ElcServicesComponent', () => {
  let component: ElcServicesComponent;
  let fixture: ComponentFixture<ElcServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElcServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElcServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
