import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.component/app.component';
import { DirectivesModule } from './module/directivesModule';

@NgModule({
    imports: [ BrowserModule, DirectivesModule ],
    declarations: [ App ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}