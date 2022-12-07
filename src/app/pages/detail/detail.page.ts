import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { RecordingService } from 'src/app/services/data/recording.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  song: any = {}; songId: any;
  recording: any = {}; recordingId : any;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router,
    private recordingService: RecordingService
  ) { }

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    this.song = this.firestoreService.getSongDetail(this.songId).valueChanges();
    this.recordingId = this.route.snapshot.paramMap.get('id');
    this.recording = this.recordingService.getRecordingDetail(this.recordingId).valueChanges();
  }

  async deleteSong() {
    const alert = await this.alertController.create({ message: 'Are you sure you want to delete the song?', 
    buttons: [
      {
        text: 'Cancel', role: 'cancel', handler: blah  => {
          console.log('Confirm cancel: blah');
        },
      },
      {
        text: 'Okay', handler: () => {
          this.firestoreService.deleteSong(this.songId).then(() => {
            this.router.navigateByUrl('');
          });
        },
      },
    ],
  });
  await alert.present();
  }

  async deleteRecording() {
    const alert = await this.alertController.create({ message: 'Are you sure you want to delete the song?',
    buttons: [
      {
        text: 'Cancel', role: 'cancel', handler: blah  => {
          console.log('Confirm cancel: blah');
        },  
      },
      {
        text: 'Okay', handler: () => {
          this.recordingService.deleteRecording(this.recordingId).then(() => {
            this.router.navigateByUrl('');
          });
        },
      },
    ] 
  });
  await alert.present();
  }
}
