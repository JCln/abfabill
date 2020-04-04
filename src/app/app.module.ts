import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AnonyHeaderComponent } from './_layout/anony-header/anony-header.component';
import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { SharedFooterModule } from './shared/shared-footer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NoLayoutComponent,
    AnonyHeaderComponent,
    AnonyLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    SharedFooterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
