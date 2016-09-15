import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WordView } from './word-view/word-view.component';
import { LetterBank } from './letter-bank/letter-bank.component';
import { Letter } from './shared/letter/letter.component';
import { App } from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App, WordView, LetterBank, Letter ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}