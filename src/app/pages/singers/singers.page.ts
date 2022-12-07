import { Component, OnInit } from '@angular/core';
import { SingerService } from 'src/app/services/data/singer.service';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.page.html',
  styleUrls: ['./singers.page.scss'],
})
export class SingersPage implements OnInit {
  singerData: any[] = [];


  constructor(private singerService: SingerService) { }

  ngOnInit() {

    this.singerService.getSinger().subscribe((data) => this.singerData = data);

  }

}
