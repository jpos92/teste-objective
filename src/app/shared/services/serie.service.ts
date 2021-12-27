import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';

import { Serie } from '../models/serie/serie';

const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
const publicKey = 'f2e1f553cdf76e22185827b67df2b39b';
const privateKey = 'b872cbac5a60fad56d0ce267f2e4e7834ce49dd0';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getSeriesByCharacter(id: number): Observable<Serie[]> {
    return this.http.get<any>(apiUrl + '/' + id + '/series?limit=6&ts=1&apikey=' + publicKey + '&hash=' + this.generateHash())
      .pipe(map(data => data.data?.results))
  }

  generateHash(): string {
    return Md5.hashStr('1' + privateKey + publicKey);
  }

}
