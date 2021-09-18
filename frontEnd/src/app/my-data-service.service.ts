import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MyDataServiceService {
  uri = 'http://localhost:8080/chart';
  
  constructor(private http: HttpClient) { }

// To Get The List Of Employee
getChartInfo() {

  return this
  .http
  .get(`${this.uri}`,);
  }




}
