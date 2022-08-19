import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }
  getAll(id:string):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/stats/teams${id}`);
    

  };
  
}
