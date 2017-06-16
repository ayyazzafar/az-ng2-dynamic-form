export class FieldBase<T>{
    value: T;
    type: string;
    rows: number;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    containerClasses: string;

    constructor(options: {
        type?: string,
        rows?: number,
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        containerClasses?: string
    } = {}) {

        this.value = options.value;
        this.type = options.type || 'text';
        this.rows = options.rows || 3;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order==undefined ? 1:options.order;
        this.controlType = options.controlType || '';
        this.containerClasses = options.containerClasses || '';
    }
}