import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAutolinkedComponent } from './ngx-autolinked.component';

export * from './ngx-autolinked.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxAutolinkedComponent,

  ],
  exports: [
    NgxAutolinkedComponent,
  ]
})
export class NgxAutolinkedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxAutolinkedModule,
      providers: []
    };
  }
}
