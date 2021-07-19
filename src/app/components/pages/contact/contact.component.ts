import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/interfaces/mensaje.service';
import { BandejaMensajesService } from 'src/app/services/bandeja-mensajes.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mensaje: Mensaje = {
    nombres: '',
    apellidos: '',
    comentarios: ''
  };

  constructor(private bandejaMsgSvc:BandejaMensajesService,private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.bandejaMsgSvc.saveMensaje(this.mensaje).subscribe(
      mensaje => {
        console.log('Mensaje -> ', mensaje);
        this.router.navigate(['/']);
      }
    );

  }

}
