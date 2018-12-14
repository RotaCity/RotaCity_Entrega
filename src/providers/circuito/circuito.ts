import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'



@Injectable()
export class CircuitoProvider {

  

  constructor(public http: Http) {
    
  }

}
