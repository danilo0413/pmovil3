import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createSongForm: FormGroup;
  public updateSongForm: FormGroup = this.formBuilder.group({});

  constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public firestoreService: FirestoreService, private formBuilder: FormBuilder, public router: Router) {

    this.createSongForm = formBuilder.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    });
  }

  ngOnInit() { }

  async createSong() {
    const loading = await this.loadingCtrl.create();
    const albumName = this.createSongForm.value.albumName; const artistName = this.createSongForm.value.artistName;
    const songDescription = this.createSongForm.value.songDescription; const songName = this.createSongForm.value.songName;
    const firestoreService = this.firestoreService.createSong(albumName, artistName, songDescription, songName).then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('');
        });
      },
      error => {
        console.error(error);
      });
    return await loading.present();

  }

  async updateSong() {
    const loading = await this.loadingCtrl.create({
      message: 'Update Song...'
    });
    const albumName = this.updateSongForm.value.albumName;
    const artisName = this.updateSongForm.value.artisName;
    const songDescription = this.updateSongForm.value.songDescription;
    const songName = this.updateSongForm.value.songName;
  }

}
