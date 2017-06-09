import { Component, Input,OnInit , ViewChild , ElementRef } from '@angular/core';

declare var require: any;

var Autolinker = require('autolinker');

@Component({
  selector: 'ngx-autolinked',
  template: `<div #alElement><ng-content></ng-content></div>`,
  styles: []
})
export class NgxAutolinkedComponent implements  OnInit{

  @Input('newWindow') newWindow  = true;
  @Input('urls') urls  = true;
  @Input('email') email  = true;
  @Input('phone') phone  = true;
  @Input('mention') mention  = "twitter";
  @Input('hashtag') hashtag  = "facebook";
  @Input('stripPrefix') stripPrefix  = true;
     
  @Input('stripTrailingSlash') stripTrailingSlash  = false;
  @Input('truncate') truncate  = false;
  @Input('className') className  = 'autolinked';

  @ViewChild('alElement') alElement: ElementRef;
  private autolinker : any;
  private getOptions(){
    return {
      newWindow : this.newWindow,
      urls : this.urls,
      email : this.email ,
      phone : this.phone ,
      mention : this.mention ,
      hashtag : this.hashtag ,
      stripPrefix : this.stripPrefix ,
      stripTrailingSlash : this.stripTrailingSlash ,
      truncate : this.truncate ,
      className : this.className
    };
  }
  constructor() { 
  }
  ngOnInit(){
    this.autolinker = new Autolinker(this.getOptions());
    this.alElement.nativeElement.innerHTML = this.autolinker.link(this.alElement.nativeElement.innerHTML);
  }

}
