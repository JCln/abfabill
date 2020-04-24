import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAndSComponent } from './cand-s.component';

describe('CAndSComponent', () => {
  let component: CAndSComponent;
  let fixture: ComponentFixture<CAndSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAndSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAndSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
