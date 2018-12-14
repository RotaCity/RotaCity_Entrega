import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class ServicosProvider {

  api: string = 'http://localhost/api/';

  constructor(public http: Http) {
    
  }

  listarDados() {
    return this.http.get(this.api + 'listar.php').map(res=>res.json());
  }
  cadastrar(parans) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiCadastro.php", parans, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)=> {return res.json();}
    );
  }

  excluir(id) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiDelete.php", id, {
      headers:headers
    }).map(
      (res:Response)=> {return res.json();}
    );
  }

  editar(data) {
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "apiUpdate.php", data, {
      headers:headers,
      method:"POST"
    }).map(
      (res:Response)=> {return res.json();}
    );
  }

}
