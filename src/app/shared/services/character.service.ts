import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';
import { Character } from '../models/character/character';


const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
const publicKey = 'f2e1f553cdf76e22185827b67df2b39b';
const privateKey = 'b872cbac5a60fad56d0ce267f2e4e7834ce49dd0';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  _characterList: Array<Character> = [];
  _characterListByName: Array<Character> = [];
  _name = '';
  _limit = 10
  _offset = 0;
  _searchByName = false;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]> {
    this._searchByName = false;
    return this.http.get<any>(apiUrl + '?limit=' + this._limit + '&offset=' + this._offset + '&ts=1&apikey=' + publicKey + '&hash=' + this.generateHash())
      .pipe(map(data => data.data?.results))
  }

  getByName(): Observable<Character[]> {
    this._searchByName = true;
    return this.http.get<any>(apiUrl + '?nameStartsWith=' + this._name + '&limit=' + this._limit + '&offset=' + this._offset + '&ts=1&apikey=' + publicKey + '&hash=' + this.generateHash())
      .pipe(map(data => data.data?.results))
  }

  getById(id: number): Observable<Character> {
    return this.http.get<any>(apiUrl + '/' + id + '?&ts=1&apikey=' + publicKey + '&hash=' + this.generateHash())
      .pipe(map(data => data.data?.results[0]))
  }

  generateHash(): string {
    return Md5.hashStr('1' + privateKey + publicKey);
  }

}
