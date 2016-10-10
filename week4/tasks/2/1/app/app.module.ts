import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { App } from './app.component';
import { routes } from './app.routes';
import { RegisterModule } from './register/register.module';
import { UsersModule } from './users/users.module';
import { WordsModule } from './words/words.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';

@NgModule({
    imports: [ 
    	BrowserModule, HttpModule, RouterModule.forRoot(routes), 
    	SharedModule, RegisterModule, UsersModule, WordsModule, LoginModule,
    	SharedModule.forRoot()
    ],
    declarations: [ App ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}