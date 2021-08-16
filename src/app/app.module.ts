import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { UserFormComponent } from './user-form/user-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { User2formComponent } from './user2form/user2form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UserFormComponent,
    User2formComponent 
     
     
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatToolbarModule,MatIconModule,MatCardModule

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
