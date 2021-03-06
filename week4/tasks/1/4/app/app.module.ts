import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http'

import { App } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NotRegistered } from './components/register/notRegistered.directive';
import { NotRegisteredAsync } from './components/register/notRegisteredAsync.directive';
import { DatepickerComponent } from './components/register/datepicker.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { WordListComponent } from './components/word-list/word-list.component';


@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ App, RegisterComponent, UserListComponent, WordListComponent, NotRegistered, NotRegisteredAsync, DatepickerComponent ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}