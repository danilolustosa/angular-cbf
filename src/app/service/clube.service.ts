import { Injectable } from "@angular/core";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Clube } from "../model/clube.model";

@Injectable()
export class ClubeService{

  id_campeonato:number = 10

  constructor(private http:HttpClient){}

  obterTabelaCampeonatoBrasileiro(): Observable<Clube[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer live_0e86d679563fa453090f86821bfb7e'
      })
    };

    return this.http.get<Clube[]>(`https://api.api-futebol.com.br/v1/campeonatos/${this.id_campeonato}/tabela`,httpOptions)
  }
}
