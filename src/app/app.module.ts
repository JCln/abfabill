import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ErrorHandlerService } from './services/error-handler.service';

import { PardakhtModule } from './pardakht/pardakht.module';
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
    AppRoutingModule
  ],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
