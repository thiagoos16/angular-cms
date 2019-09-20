import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

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

  delete(key: string) {
    this.db.object(`user/${key}`).remove();
  }
}
