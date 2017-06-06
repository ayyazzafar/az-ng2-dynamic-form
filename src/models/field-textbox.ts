import {FieldBase} from "./FieldBase";

export class FieldTextbox extends FieldBase<string>{
    controlType = 'textbox';
    type:string;

    constructor(options:{} = {}){
        super(options);

        this.type = options['type'] || '';

    }
}