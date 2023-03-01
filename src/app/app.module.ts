import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlFormComponent } from './control-form/control-form.component';
import { FormsModule } from '@angular/forms';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  declarations: [
    ControlFormComponent,
    JavascriptComponent,
    AngularComponent,
    AdduserComponent,
    UserDetailComponent,
    AllUsersComponent,
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
