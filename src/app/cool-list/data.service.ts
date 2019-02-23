import { Injectable } from '@angular/core';
import { data } from '../data';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(size, page) {
    console.log(size,page)
    const from =size * page - size;
    const end = from + size;
    const result= data.slice(from, end)
   
    return result;
  }
  constructor() {


  }
}
