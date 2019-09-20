import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User;
  title: string = '';

  constructor() { }

  ngOnInit() {
    this.title = "Gerenciar Usuário";
  }

}
