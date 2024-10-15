import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxInputGroupModule, IgxButtonModule, IgxButtonGroupModule, IgxButtonGroupComponent, IgxCardModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
