import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/data/firestore.service';
import { RecordingService } from '../services/data/recording.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  songList:any = [];
  recordingList: any = [];
  constructor(
    private firestoreService: FirestoreService, private router: Router, private recordingService: RecordingService
  ) {}

  ngOnInit() {
    this.songList = this.firestoreService.getSongList().valueChanges();
    this.recordingList = this.recordingService.getRecordingList().valueChanges();
  }

}

