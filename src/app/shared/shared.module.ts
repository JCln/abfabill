import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpinnerWrapperComponent } from './../spinner-wrapper/spinner-wrapper.component';

@NgModule({
  declarations: [SpinnerWrapperComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormsModule, CommonModule , SpinnerWrapperComponent],

})
export class SharedModule { }
