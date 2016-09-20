import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ifElse } from './directives/ifElse.directive';
import { App } from './app.component/app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App, ifElse ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}