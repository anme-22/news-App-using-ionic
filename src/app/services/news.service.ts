import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Article, NewsResponse } from '../interfaces';
import { map, Observable } from 'rxjs';

const apiKey= environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getTopHeadLines(): Observable<Article[]>{
     return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?sources=techcrunch`,{
      params: {
        apiKey
      }
     },).pipe(
      map( ({articles}) => articles)
     )
  }

  getTopHeadLinesByCategory(category: string): Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`,{
      params: {
        apiKey
      }
     },).pipe(
      map( ({articles}) => articles)
     )
  }

}
