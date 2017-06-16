import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {FormGroup} from "@angular/forms";

import {FieldBase} from "../models/field-base";
import {FieldControlService} from "../field-control.service";


@Component({
  selector: 'az-ng2-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers:[FieldControlService]
})
export class DynamicFormComponent implements OnInit {

  @Output() onSubmit:EventEmitter<FormGroup> = new EventEmitter();
  @Input() fields:FieldBase<any>[] = [];
  @Input() material:boolean = false;
  @Input() theme:string = 'primary';
  @Input() processing:boolean = false;
  
  constructor(private fcs: FieldControlService) { }

  form:FormGroup;
  payload = '';
  
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
    
  }

  onFormSubmit(){
    this.onSubmit.emit(this.form);
    this.payload = JSON.stringify(this.form.value);
  }

}
