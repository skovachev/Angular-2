import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { myFor } from './directives/myFor.directive';
import { App } from './app.component/app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App, myFor ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}