export interface Curso{
  id?:number;
  codigo:string;
  nombre:string;
  creditos: number;
  horasTeoria: number;
  horasPractica: number;
  sumilla:string;
  createdAt?:Date;
  updatedAt?:Date;

}
