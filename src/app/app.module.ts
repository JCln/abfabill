import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AnonyHeaderComponent } from './_layout/anony-header/anony-header.component';
import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { HeaderComponent } from './_layout/header/header.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PardakhtModule } from './pardakht/pardakht.module';
import { ViewBillComponent } from './pardakht/view-bill/view-bill.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NoLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ViewBillComponent,
    AnonyHeaderComponent,
    AnonyLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    PardakhtModule,
    // should remove for lazy load 
    // ResponseModule,
    // -------------
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [FormsModule],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
