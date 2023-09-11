import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfficerUIModule } from './officer-ui/officer-ui.module';
import { UserUIModule } from './user-ui/user-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserUIModule,
    OfficerUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
