import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetterAnnounceComponent } from './metter-announce.component';

describe('MetterAnnounceComponent', () => {
  let component: MetterAnnounceComponent;
  let fixture: ComponentFixture<MetterAnnounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetterAnnounceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetterAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
// metter componenet main method should work correctly

// describe('metter comnponent', () => {
//   let srt;

//   beforeEach(() => {
//     srt = {}
//   })
//   describe('main mehtod ', () => {
//     it('should work correcdtly', () => {
//       srt.a = false;
//       srt.a = true;
//       expect(srt.a).toBe(true);
//     })
//   })
// })