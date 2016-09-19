import { NgModule } from '@angular/core';

import { myFor } from './directives/myFor.directive';

@NgModule({
    declarations: [ myFor ],
    exports: [ myFor ]
}) 
export class DirectivesModule {
	
}