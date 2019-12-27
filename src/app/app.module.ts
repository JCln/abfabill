import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PardakhtModule } from './pardakht/pardakht.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorHandlerService } from './services/error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PardakhtModule,
    ToastModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ErrorHandlerService , ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
