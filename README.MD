# az-ng2-dynamic-form

## Installation

To install this library, run:

```bash
$ npm install az-ng2-dynamic-form --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install az-ng2-dynamic-form
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AzNg2DynamicFormModule } from 'az-ng2-dynamic-form';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    AzNg2DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Prepare list of required fields

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class ContactComponent {
  fields:FieldBase<any>[] = [];
  constructor() {
     this.fields= [

            new FieldTextbox({
                key:'firstName', 
                label: 'First Name', 
                value: '', 
                required:true,
                order:1,
                type:'text',
                containerClasses:'col-sm-6'
            }), 

            new FieldTextbox({
                key:'lastname', 
                label: 'Last Name', 
                value: '', 
                required:true,
                order:1,
                type:'text',
                containerClasses:'col-sm-6'
            }),

            new FieldTextbox({
                key:'subject', 
                label: 'Subject', 
                value: '', 
                required:true,
                order:1,
                type:'text',
                containerClasses:'col-sm-12'
            }), 

        

            new FieldTextbox({
                key:'message', 
                label: 'Your Message', 
                value: '', 
                required:true,
                order:1,
                type:'textarea',
                rows:8,
                containerClasses:'col-sm-12'
            }), 

        ];
        this.fields.sort((a, b)=>a.order-b.order);


  }
  


}
```


Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->

<az-ng2-dynamic-form [material]="true" [fields]="fields">
        <h2><strong>Contact </strong>Us</h2><hr>            
</az-ng2-dynamic-form>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ayyaz](mailto:contact@ayyaz.io)
