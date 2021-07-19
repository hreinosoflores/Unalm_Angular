import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  cursos: Curso[] = [];

  formatoFecha='dd/MM/yyyy h:mm:ss a';


  constructor(private cursoSvc: CursosService) { }

  ngOnInit(): void {
    this.cursoSvc.getCursos().subscribe(
      cursos => {
        this.cursos = [...cursos];
      }

    );
  }

}

