import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class BandejaMensajesService {

  private apiURL = environment.apiUrlContacto;

  constructor(private http: HttpClient) { }

  saveMensaje(mensaje: Mensaje): Observable<Mensaje> {
    mensaje.createdAt = new Date();
    mensaje.updatedAt = new Date();
    return this.http.post<Mensaje>(this.apiURL, mensaje);
  }
}
