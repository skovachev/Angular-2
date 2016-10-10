
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WordListComponent } from './word-list.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [WordListComponent],
    exports: [WordListComponent]
})

export class WordsModule { }