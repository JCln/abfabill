import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PardakhtModule } from './pardakht/pardakht.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ErrorHandlerService } from './services/error-handler.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    PardakhtModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
