import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { RecordingService } from 'src/app/services/data/recording.service';

@Component({
  selector: 'app-recording-create',
  templateUrl: './recording-create.page.html',
  styleUrls: ['./recording-create.page.scss'],
})
export class RecordingCreatePage implements OnInit {
  public createRecordingForm: FormGroup;

  constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public recordingService: RecordingService, private formBuilder: FormBuilder, public router: Router) {
      this.createRecordingForm = formBuilder.group({
        idRecording: ['',Validators.required],
        nameRecording: ['',Validators.required],
        typeMelody: ['',Validators.required],
        numberCabins: ['',Validators.required],
        owner: ['',Validators.required],
      })
     }

  ngOnInit() {  }

  async createRecording() {
    const loading = await this.loadingCtrl.create();
    const idRecording = this.createRecordingForm.value.idRecording;
    const nameRecording = this.createRecordingForm.value.nameRecording;
    const typeMelody = this.createRecordingForm.value.typeMelody;
    const numberCabins = this.createRecordingForm.value.numberCabins;
    const owner = this.createRecordingForm.value.owner;
    const firestoreService = this.recordingService.createRecording(idRecording, nameRecording, typeMelody, numberCabins,owner).then(
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
    
}

