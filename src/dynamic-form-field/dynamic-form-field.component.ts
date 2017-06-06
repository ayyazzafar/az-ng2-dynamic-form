import { Component, state, animate,  OnInit, Input, transition, keyframes, style, trigger} from '@angular/core';

import { FieldBase } from "app/az-ng2-dynamic-form/models/FieldBase";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'df-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss'],
  animations:[
    
    trigger('itemEnter', [
      state('in', style({translate:'translateY(0)'})), 
      transition('void=>*', [
        style({  opacity:0}), 
        animate('300ms ease-in', keyframes([
          style({transform:'translateY(10%)', opacity:0, offset:0}), 
          style({transform:'translateY(-5px)', opacity:0.5, offset:0.3}), 
          style({transform:'translateY(-10px)', opacity:1, offset:0.6}), 
          style({transform:'translateY(0%)', opacity:1, offset:1}), 
        ]))
      ]),
      transition('* => void', [
        
        animate('300ms ease-out', keyframes([
          style({transform:'translateY(-15px)', opacity:1, offset:0.7}),
          style({transform:'translateY(15px)', opacity:0, offset:1}),
        ]))
      ])
    ])]
})
export class DynamicFormFieldComponent implements OnInit {

  constructor() { }
  @Input() field:FieldBase<any>;
  @Input() form:FormGroup;
  @Input() material:boolean=false;
  ngOnInit() {
  }


  get isValid(){
    return this.form.controls[this.field.key].valid;
  }
}
