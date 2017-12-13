import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModule } from '@angular/common';

import { TomeService } from './tome.service';
// import { TomeComponent } from './tome.component';

@NgModule({
  // declarations: [TomeComponent],
  imports: [HttpModule]
  // exports: [TomeComponent]
})
export class TomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TomeModule,
      providers: [TomeService]
    };
  }
}
