import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-list-concert',
  templateUrl: './list-concert.page.html',
  styleUrls: ['./list-concert.page.scss'],
})
export class ListConcertPage implements OnInit {

  listConcerts:any=[];

  constructor(public es:ConcertService) { }

  ngOnInit() {
    this.es.getListConcert().then(listConcertSnapShot=>{
      this.listConcerts=[];
      listConcertSnapShot.forEach(snap=>{this.listConcerts.push({id: snap.id,
        nombre: snap.data().nombre,
        precio: snap.data().precio,
        fecha: snap.data().fecha });
        return false;
      });
    });
    
  }

}
