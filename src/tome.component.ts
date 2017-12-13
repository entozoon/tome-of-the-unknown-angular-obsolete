import { Component } from '@angular/core';
import { TomeService } from './tome.service';

@Component({
  selector: 'tomeComponent',
  template: `<h1>tomeTest!!!</h1>`,
  providers: [TomeService]
})
export class TomeComponent {
  // Not actually sure if I should run the service from the component but yeah
  constructor(private tomeOfTheUnknown: TomeService) {
    console.log('Hello from TomeComponent!');
  }
}
