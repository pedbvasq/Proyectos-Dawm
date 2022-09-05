import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http:HttpClient) { }

  getTeamsId(id:string):Observable<any>{
    return this.http.get( `http://localhost:3000/stats/teams/${id}` );
    

  };

  getLiga():Observable<any>{
    return this.http.get( `http://localhost:3000/stats/league` );
  }
}
