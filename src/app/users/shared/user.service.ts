import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase, public firebaseauth: AngularFireAuth) { }

  register(user): Promise<any> {
    return this.firebaseauth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  insert(user: User) {
    this.db.list('users').push(user)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(user: User, key: string) {
    return this.db.list('users').update(key, user)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('users')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(u => ({ key: u.payload.key, ...u.payload.val()}));
        })
      );
  }

  getOne(key: string)  {
    return this.db.object(`users/${key}`).snapshotChanges()
    .pipe(
      map(c => {
        const data: any = { key: c.key, ...c.payload.val() };
        // const modelo: TModel = data as TModel;
        return data;
      })
    );
  }

  delete(key: string) {
    this.db.object(`users/${key}`).remove();
  }

  resetPassword(email: string): Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
}
