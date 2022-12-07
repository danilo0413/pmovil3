import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-detail-concert',
  templateUrl: './detail-concert.page.html',
  styleUrls: ['./detail-concert.page.scss'],
})
export class DetailConcertPage implements OnInit {

  public currentConcert:any=[];
  public nombreUsuario="";

  constructor(public es:ConcertService, public AR:ActivatedRoute) { }

  ngOnInit() {
    const idConcert: string = this.AR.snapshot.paramMap.get('id');
    this.es.getDetailConcert(idConcert).then(concertSnapshot=>{
      this.currentConcert = concertSnapshot.data();
      this.currentConcert.id = concertSnapshot.id;
    });
  }

  agregarUsuario(nombreUsuario: string):void {
    this.es.agregarUsuarios(nombreUsuario, this.currentConcert.id, this.currentConcert.precio).then(() => this.nombreUsuario = '');
  }

}
