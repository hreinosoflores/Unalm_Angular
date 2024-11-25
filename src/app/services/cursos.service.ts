import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/curso.interface';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiURL = environment.apiUrlCursos;


  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiURL);
  }

  getCursoById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiURL}/${id}`);
  }

  saveCurso(curso: Curso): Observable<Curso> {
    curso.updatedAt = new Date();
    if (!curso.id) {
      curso.createdAt = new Date();
      return this.http.post<Curso>(this.apiURL, curso);
    } else {
      return this.http.put<Curso>(`${this.apiURL}/${curso.id}`, curso);
    }
  }

  deleteCurso(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiURL}/${id}`);
  }

}
