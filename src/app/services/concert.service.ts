import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat/app';
import { DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  public listRefConcert: firebase.firestore.CollectionReference;

  constructor(public AS:AuthService) { }

  async creacionConcierto(nombreConcierto:string, fecha:string, valorEntrada:number, costoConcierto:number):Promise<DocumentReference>{
    const user: firebase.User = await this.AS.getUser();
    this.listRefConcert = firebase.firestore().collection(`perfilUser/${user.uid}/eventList`);

    return this.listRefConcert.add({
      name: nombreConcierto,
      fecha: fecha,
      precio: valorEntrada*1,
      costo: costoConcierto*1,
      ingreso: costoConcierto* -1,
    });
  }

  getListConcert():Promise<firebase.firestore.QuerySnapshot>{
    const usuario: firebase.User = this.AS.getUser();
    this.listRefConcert=firebase.firestore().collection(`perfilUser/${usuario.uid}/listConcer`);
    return this.listRefConcert.get();
  }

  getDetailConcert(idConcert:string):Promise<firebase.firestore.QueryDocumentSnapshot>{
    const usuario: firebase.User = this.AS.getUser();
    this.listRefConcert=firebase.firestore().collection(`perfilUser/${usuario.uid}/listaConcierto`);
    return this.listRefConcert.doc(idConcert).get();
  }

  async agregarUsuarios(nombreUsuario:string, idConcert: string, valorEntrada: number):Promise<void>{

    return this.listRefConcert.doc(idConcert)
    .collection('listaUsuario')
    .add({nombreUsuario})
    .then((nuevoUsuario)=>{
      return firebase.firestore().runTransaction(transaction => {
        return transaction.get(this.listRefConcert.doc(idConcert)).then(concertDoc=>{
          const nuevoIngreso = concertDoc.data().ingreso + valorEntrada;
          transaction.update(this.listRefConcert.doc(idConcert), {ingreso: nuevoIngreso}
          );
        });
      });
    });
  }
}
