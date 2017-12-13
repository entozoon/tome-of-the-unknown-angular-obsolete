import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

@Injectable()
export class TomeService {
  public articles: any;
  articlesPath = '/assets/articles.json';

  constructor(public http: Http) {
    console.log('TomeService');
  }

  // readJson
  // Read a given JSON file and resolve parsed
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

  // getArticles
  // Read all articles from JSON, store locally as this.articles and return in resolve
  getArticles() {
    return new Promise((resolve, reject) => {
      console.log('TomeOfTheUnknown: Getting articles');
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

  // search
  // Hunt for the query within the article titles (ignoring case)
  search(searchQuery: string) {
    return new Promise((resolve, reject) => {
      resolve(
        this.articles.filter(article => {
          return article.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      );
    });
  }
}
