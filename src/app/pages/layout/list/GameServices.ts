import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServices
{

private baseUrl = 'http://127.0.0.1:8000/';
constructor(private http: HttpClient)
{


}

getGameDataList(): Observable<any> {
  console.log("getGameDataList");


    return this.http.get('http://127.0.0.1:8000/');
  }

}
