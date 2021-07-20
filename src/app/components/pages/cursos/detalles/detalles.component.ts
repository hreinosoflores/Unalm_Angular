import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html'
})
export class DetallesComponent implements OnInit {

  curso!: Curso;

  formatoFecha = 'dd/MM/yyyy h:mm:ss a';


  constructor(private cursoSvc: CursosService, private router: Router, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params => {
      this.cursoSvc.getCursoById(params.id).subscribe(
        curso => {
          this.curso = curso;
          document.title = environment.title + this.curso.nombre;
        }

      )
    });


  }

  onDelete(): void {
    var aceptado = confirm('¿Desea eliminar este curso?');
    if (aceptado) {
      this.cursoSvc.deleteCurso(this.curso.id!).subscribe(
        () => this.router.navigate(['/'])
      );
    }
  }
}
