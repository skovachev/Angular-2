import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WordGame } from './components/wordgame/wordgame';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ WordGame ],
    bootstrap: [ WordGame ]
}) 
export class AppModule {
	
}