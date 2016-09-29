import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { App } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NotRegistered } from './components/register/notRegistered.directive';
import { UserListComponent } from './components/user-list/user-list.component';
import { WordListComponent } from './components/word-list/word-list.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ App, RegisterComponent, UserListComponent, WordListComponent, NotRegistered ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}