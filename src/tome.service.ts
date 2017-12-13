import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

@Injectable()
export class TomeService {
  public articles: any;
  articlesPath = '/assets/articles.json';

  constructor(public http: Http) {
    console.log('TomeService');
  }

  readJson(path: string) {
    return new Promise((resolve, reject) => {
      this.http.get(path).subscribe(
        response => {
          resolve(response.json());
        },
        err => {
          console.error(
            "TomeOfTheUnknown: Couldn't find data file when looking in (src)" +
              path
          );
          reject(err);
        }
      );
    });
  }

  get articlez() {
    return this.articles;
  }

  getArticles() {
    return new Promise((resolve, reject) => {
      console.log('TomeOfTheUnknown: Getting articles');
      // return this.articles
      this.readJson(this.articlesPath)
        .then(results => {
          this.articles = results;
          resolve(this.articles);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
