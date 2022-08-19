import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { 

  }
  getAll():Observable<any>{
    return this.http.get("http://localhost:3000/stats/players");
    

  };

  getPlayers():Observable<any>{
    return this.http.get("https://football-stats-343fd-default-rtdb.firebaseio.com/collection.json");
    

  };
}

