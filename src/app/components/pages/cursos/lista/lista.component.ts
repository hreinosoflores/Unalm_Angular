import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { ConfirmacionService } from 'src/app/services/confirmacion.service';
import { CursosService } from 'src/app/services/cursos.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css'],
    standalone: false
})
export class ListaComponent implements OnInit, OnDestroy {

  cursos: Curso[] = [];

  pagina: number = 1;

  formatoFecha = 'dd/MM/yyyy h:mm:ss a';

  get confirmText() {
    return this.confirmSvc.confirmText;
  }

  set confirmText(text: string) {
    this.confirmSvc.confirmText = text;
  }

  constructor(
    private cursoSvc: CursosService,
    private confirmSvc: ConfirmacionService) { }


  ngOnInit(): void {
    this.cursoSvc.getCursos().subscribe(
      cursos => {
        this.cursos = [...cursos.sort((a, b) => {
          if (a === b) return 0;
          if (a.updatedAt! > b.updatedAt!) return -1;
          else return 1;
        })];
      }
    );

    document.title = environment.title + 'Nuestros Cursos';
  }

  ngOnDestroy(): void {
    this.confirmText = '';
  }

}

