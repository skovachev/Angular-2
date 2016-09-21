import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ifElseStar } from './directives/ifElseStar.directive';
import { ifTrueCase } from './directives/ifTrueCase.directive';
import { ifFalseCase } from './directives/ifFalseCase.directive';
import { App } from './app.component/app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App, ifElseStar, ifFalseCase, ifTrueCase ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}