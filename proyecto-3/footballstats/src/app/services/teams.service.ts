import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }
  getAllId(id:string):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/stats/teams${id}`);
    

  };

  getAll():Observable<any>{
    return this.http.get<any>(`http://localhost:3000/stats/teams`);
    
  };

  getTeamsDetails(id:string):Observable<any>{
    return this.http.get<any>(`https://futbol-665de-default-rtdb.firebaseio.com/teams.json?orderBy=%22id%22&equalTo=${id}`);
  }
  
}
