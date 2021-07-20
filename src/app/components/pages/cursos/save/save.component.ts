import { Component, OnInit, Output } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';
import { ConfirmacionService } from 'src/app/services/confirmacion.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html'
})
export class SaveComponent implements OnInit {

  curso: Curso = {
    codigo: '',
    nombre: '',
    creditos: 0,
    horasTeoria: 0,
    horasPractica: 0,
    sumilla: ''
  };

  formTitle: string = 'Nuevo Curso';

  formButton: string = 'Registrar';

  set confirmText(text: string) {
    this.confirmSvc.confirmText = text;
  }


  constructor(
    private cursoSvc: CursosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private confirmSvc: ConfirmacionService) {

  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.cursoSvc.getCursoById(params.id).subscribe(
          curso => {
            this.curso = curso;
            this.formTitle = 'Editando Curso';
            this.formButton = 'Guardar Cambios';
            document.title = environment.title + 'Editando Curso';
          });
      }
    });
    document.title = environment.title + 'Registrando Nuevo Curso';
  }

  onSubmit(): void {

    if (!this.curso.id) {
      this.confirmText = 'El curso fue registrado con éxito.';
    } else {
      this.confirmText = 'El curso fue modificado con éxito.';
    }

    this.cursoSvc.saveCurso(this.curso).subscribe(
      curso => {
        console.log('Curso -> ', curso);
        this.router.navigate(['/']);
      }
    );
  }

}
