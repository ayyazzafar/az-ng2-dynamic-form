import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from "@angular/forms";

import {FieldBase} from "../models/FieldBase";
import {FieldControlService} from "../field-control.service";


@Component({
  selector: 'az-ng2-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers:[FieldControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields:FieldBase<any>[] = [];
  @Input() material:boolean = false;
  
  constructor(private fcs: FieldControlService) { }

  form:FormGroup;
  payload = '';
  
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
    
  }

  onSubmit(){
    this.payload = JSON.stringify(this.form.value);
  }

}
