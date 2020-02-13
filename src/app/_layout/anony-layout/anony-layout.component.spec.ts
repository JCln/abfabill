import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonyLayoutComponent } from './anony-layout.component';

describe('AnonyLayoutComponent', () => {
  let component: AnonyLayoutComponent;
  let fixture: ComponentFixture<AnonyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
