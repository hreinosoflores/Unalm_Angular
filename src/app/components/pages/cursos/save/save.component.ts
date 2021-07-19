import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private cursoSvc: CursosService, private router: Router, private activateRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      if(params.id){
        this.cursoSvc.getCursoById(params.id).subscribe(
          curso => this.curso = curso);
      }
    });

  }

  onSubmit(): void {
    this.cursoSvc.saveCurso(this.curso).subscribe(
      curso => {
        console.log('Curso -> ', curso);
        this.router.navigate(['/']);
      }
    );

  }

}
