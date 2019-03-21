import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataApiDb implements InMemoryDbService {

  constructor() { }

  createDb(){
    return {
      moods: [
        {  id:  1,  name:  'MO1' },
        {  id:  2,  name:  'MO2' },
        {  id:  3,  name:  'M03' },
        {  id:  4,  name:  'MO4' }
      ]
    };
  }
}
