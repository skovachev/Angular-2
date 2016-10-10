
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { DatepickerComponent } from './datepicker.component';
import { NotRegistered } from './notRegistered.directive';
import { NotRegisteredAsync } from './notRegisteredAsync.directive';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [RegisterComponent, DatepickerComponent, NotRegistered, NotRegisteredAsync],
    exports: [RegisterComponent]
})

export class RegisterModule { }