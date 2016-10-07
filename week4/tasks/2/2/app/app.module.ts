import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { App } from './app.component';
import { HighlightPipe } from './HighlightPipe';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ App, HighlightPipe ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}