import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-create-concert',
  templateUrl: './create-concert.page.html',
  styleUrls: ['./create-concert.page.scss'],
})
export class CreateConcertPage implements OnInit {

  nombreConcierto:string;
  fecha:string;
  valorEntrada:number;
  costoConcierto:number;

  constructor(public router:Router, public es:ConcertService) { }

  ngOnInit() {
  }

  crearConcierto(nombreConcierto:string, fecha:string, valorEntrada:number, costoConcierto:number): void{
    if(nombreConcierto==undefined || fecha==undefined || valorEntrada==undefined || costoConcierto==undefined){
      return;
    }
    this.es.creacionConcierto(nombreConcierto, fecha, valorEntrada, costoConcierto).then(() =>{
      this.router.navigateByUrl('/start-concert');
    });
  }

}
