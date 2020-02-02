import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FooterComponent } from './_layout/footer/footer.component';
import { HeaderComponent } from './_layout/header/header.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PardakhtModule } from './pardakht/pardakht.module';
import { FailedComponent } from './response/failed/failed.component';
import { SuccessComponent } from './response/success/success.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // PageNotFoundComponent,
    FailedComponent,
    NoLayoutComponent,
    LayoutComponent,
    SuccessComponent,
    // OldReceiptComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    PardakhtModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [FormsModule],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
