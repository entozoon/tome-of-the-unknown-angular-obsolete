import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModule } from '@angular/common';

import { TomeService } from './tome.service';
import { TomeComponent } from './tome.component';

@NgModule({
  declarations: [TomeComponent],
  imports: [HttpModule],
  exports: [TomeComponent]
})
// export class TomeOfTheUnknown {
//   articles: any;

//   constructor(public http: Http) {
//     console.log('HELLO FROM TOME');
//     console.log('Attempting to read a JSON file..');
//     this.testRead().then(results => {
//       console.log(results);
//     });
//   }

//   // This should be in a .service
//   testRead() {
//     return new Promise(resolve => {
//       this.http.get('/assets/articles.json').subscribe(response => {
//         // console.log('WE ONLY WANT TO RUN THIS ONCE');
//         this.articles = response.json();
//         console.log(response);
//         resolve(this.articles);
//       });
//     });
//   }
// }
export class TomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TomeModule,
      providers: [TomeService]
    };
  }
}
