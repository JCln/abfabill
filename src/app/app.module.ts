import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AnonyHeaderComponent } from './_layout/anony-header/anony-header.component';
import { AnonyLayoutComponent } from './_layout/anony-layout/anony-layout.component';
import { NoLayoutComponent } from './_layout/no-layout/no-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathComponent } from './path/path.component';
import { SharedFooterModule } from './shared/shared-footer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NoLayoutComponent,
    AnonyHeaderComponent,
    AnonyLayoutComponent,
    PathComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    SharedFooterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
