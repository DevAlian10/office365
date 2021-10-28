import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private firestore: AngularFirestore) { }

    saveLogin(data: any): Promise<any> {
        return this.firestore.collection('Users').add(data);
    }
}
