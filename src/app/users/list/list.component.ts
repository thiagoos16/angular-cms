import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title: string = 'Usuários';
  users: User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe(
      (resp: any[]) => {
      this.users = resp.filter(u => u.email);
    })
  }

  recovery(user: User) {
    this.userService.resetPassword(user.email).
      then((res)=> {
        console.log("Email enviado.");
      }).catch(() => {
        console.log("Erro de envio");
      });
  }
}
