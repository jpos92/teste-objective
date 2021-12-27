import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
const publicKey = 'f2e1f553cdf76e22185827b67df2b39b';
const privateKey = 'b872cbac5a60fad56d0ce267f2e4e7834ce49dd0';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

constructor() { }

generateHash(): string {
  return Md5.hashStr('1' + privateKey + publicKey);
}

}
