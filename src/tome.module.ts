import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, HttpModule]
})
export class TomeOfTheUnknown {
  articles: any;

  constructor(private http: Http) {
    console.log('HELLO FROM TOME');
    console.log('Attempting to read a JSON file..');
    this.testRead().then(results => {
      console.log(results);
    });
  }

  // This should be in a .service
  testRead() {
    return new Promise(resolve => {
      this.http.get('/assets/articles.json').subscribe(response => {
        // console.log('WE ONLY WANT TO RUN THIS ONCE');
        this.articles = response.json();
        console.log(response);
        resolve(this.articles);
      });
    });
  }
}
