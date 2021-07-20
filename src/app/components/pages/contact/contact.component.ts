import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/interfaces/mensaje.service';
import { BandejaMensajesService } from 'src/app/services/bandeja-mensajes.service';
import { ConfirmacionService } from 'src/app/services/confirmacion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  mensaje: Mensaje = {
    nombres: '',
    apellidos: '',
    comentarios: ''
  };

  set confirmText(text: string) {
    this.confirmSvc.confirmText = text;
  }

  constructor(
    private bandejaMsgSvc:BandejaMensajesService,
    private router: Router,
    private confirmSvc: ConfirmacionService
    ) { }

  ngOnInit(): void {
    document.title = environment.title + 'Contáctenos';

  }

  onSubmit(): void {
    this.bandejaMsgSvc.saveMensaje(this.mensaje).subscribe(
      mensaje => {
        console.log('Mensaje -> ', mensaje);
        this.confirmText = 'Se enviaron los comentarios';
        this.router.navigate(['/']);
      }
    );

  }

}
