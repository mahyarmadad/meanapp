import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MynameComponent } from './myname/myname.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, MynameComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
