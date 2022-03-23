import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {FormsModule} from '@angular/forms';
import { JackpotComponent } from './jackpot/jackpot.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    JackpotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
