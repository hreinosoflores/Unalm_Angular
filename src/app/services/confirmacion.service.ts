import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacionService {

  confirmText:string;

  constructor() {
    this.confirmText='';
  }
}
