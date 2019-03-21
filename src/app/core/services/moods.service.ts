import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mood } from '../models/mood';

@Injectable({
  providedIn: 'root'
})
export class MoodsService {

  protected URL = 'http://localhost:5000/api/moods';

  constructor(private http: HttpClient) {}

  /**
   * Find all the moods
   * @param params 
   * @returns gets all moods
   */
  public findAll(params?): Observable<Mood[]>{
    return this.http.get<Mood[]>(this.URL, {params: params})
  }

  /**
   * Find a mood by its identifier
   * @param id 
   * @returns gets the mood found
   */
  public findById(id: number): Observable<Mood>{
    return this.http.get<Mood>(this.URL + '/'  + id);
  }

  /**
   * Insert the mood
   * @param data 
   * @returns gets the response of a mood
   */
  public insert(data: Mood): Observable<Mood>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<Mood>(this.URL, data, {headers});
  }
}
