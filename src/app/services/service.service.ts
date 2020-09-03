import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(protected http: HttpClient) { }

  public getHouses(SellRent: number): Observable<IProperty[]> {
    return this.http.get('/api/Houses').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
        console.log(propertiesArray);
        return propertiesArray;

      })
    );
  }

}
