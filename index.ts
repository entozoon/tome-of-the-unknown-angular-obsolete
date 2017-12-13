// Tome of the Unknown!
// Based on:
// https://github.com/beeman/angular-sample-module
// ( another useful resource is: )
// https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TomeService } from './src/tome.service';
import { TomeComponent } from './src/tome.component';

export * from './src/tome.service';
export * from './src/tome.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TomeComponent],
  exports: [TomeComponent]
})
export class TomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TomeModule,
      providers: [TomeService]
    };
  }
}
