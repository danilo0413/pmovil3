import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { RecordingStudio } from 'src/app/Recording_studios.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  constructor(public firestore: AngularFirestore) { }

  createRecording(idRecording: string, nameRecording: string, typeMelody: string, numberCabins: string, owner: string): Promise<void> {
    const id = idRecording;
    return this.firestore.doc(`RecordingList/${id}`).set({ idRecording, nameRecording, typeMelody, numberCabins, owner });
  }

  getRecordingList(): AngularFirestoreCollection<RecordingStudio> {
    return this.firestore.collection(`RecordingList`);
  }

  getRecordingDetail(recordingId: string): AngularFirestoreDocument<RecordingStudio> {
    return this.firestore.collection('RecordingList').doc(recordingId);
  }

  deleteRecording(recordingId: string): Promise<void> {
    return this.firestore.doc(`RecordingList/${recordingId}`).delete();
  }
}
