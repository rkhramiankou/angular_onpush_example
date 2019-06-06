import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { UnderTopComponent } from './under-top/under-top.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    UnderTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
