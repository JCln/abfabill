import { NgModule } from '@angular/core';

import { PerCurrencySplitterPipe } from './../service-desk/pipes/per-currency-splitter.pipe';

@NgModule({
    declarations: [PerCurrencySplitterPipe],
    imports: [],
    exports: [PerCurrencySplitterPipe],

})
export class CurrencySplitterModule { }
