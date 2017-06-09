# ngx-autolinked

An Angular 4+ Component to parse links (urls ,emails ,phones ,hashtags and mentions ) in text into clickable links

## Examples
You can find live examples/demo [here](https://www.techiediaries.com/demos/ngx-autolinked/)


## Installation

To use ngx-autolinked in your project, install it via npm:

```bash
$ npm install ngx-autolinked --save
```

## Usage
Import the NgxAutolinkedModule from ngx-autolinked  into your app :

Once the library is imported, you can use the ngx-autolinked component in your Angular application:

```xml

import { NgxAutolinkedModule } from 'ngx-autolinked';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAutolinkedModule,
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then in your component 

```xml

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
    <div>
      <ngx-autolinked>
        <p>https://www.techiediaries.com </p>
      </ngx-autolinked>
    </div>
  `,
  styles: []
})
export class AppComponent {
}

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

MIT © [Techiediaries](mailto:techiediaries9@gmail.com)
