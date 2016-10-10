import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { User } from './index';
import { Word } from './index';
import { UsersService } from './index';
import { WordsService } from './index';
import { Validator, AuthService } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule, FormsModule, RouterModule]
})

export class SharedModule { 
	static forRoot(): ModuleWithProviders {
    	return {
      		ngModule: SharedModule,
      		providers: [UsersService, WordsService, Validator, AuthService]
    	};
  	}	
}