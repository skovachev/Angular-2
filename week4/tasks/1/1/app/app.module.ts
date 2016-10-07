import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WordView } from './word-view/word-view.component';
import { LetterBank } from './letter-bank/letter-bank.component';
import { Letter } from './shared/letter/letter.component';
import { SelectDifficulty } from './select-difficulty/select-difficulty.component';
import { Summary } from './summary/summary.component';
import { App } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ App, WordView, LetterBank, Letter, SelectDifficulty, Summary ],
    bootstrap: [ App ]
}) 
export class AppModule {
	
}