import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldReceiptComponent } from './old-receipt.component';

describe('OldReceiptComponent', () => {
  let component: OldReceiptComponent;
  let fixture: ComponentFixture<OldReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
