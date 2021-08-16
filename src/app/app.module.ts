import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 


import {FormsModule} from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UserFormComponent
     
  ],
  imports: [
    BrowserModule,FormsModule
    // NoopAnimationsModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatTableModule,
    // MatTabsModule,
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
