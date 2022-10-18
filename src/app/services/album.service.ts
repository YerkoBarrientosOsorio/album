import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoModel } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

constructor(private httpClient: HttpClient) {

 }

  public getAlbumList(): Observable<PhotoModel[]>{
    return this.httpClient.get<PhotoModel[]>('https://jsonplaceholder.typicode.com/photos');
  }
  
}


