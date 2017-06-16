import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdButtonModule } from "@angular/material";


import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component"; 
import {DynamicFormFieldComponent} from "./dynamic-form-field/dynamic-form-field.component";

export * from "./models/field-base";
export * from "./models/field-textbox";

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, MdInputModule, MdButtonModule
  ],
  exports:[DynamicFormComponent, DynamicFormFieldComponent, MdInputModule, MdButtonModule],
  declarations: [DynamicFormComponent, DynamicFormFieldComponent]
})
export class AzNg2DynamicFormModule { }
