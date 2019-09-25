import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { UserDataService } from '../shared/user-data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User;
  title: string = '';
  emailPatterns: string = '';
  key: string = '';

  constructor(private userService: UserService, private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.title = "Gerenciar Usuário";
    this.emailPatterns = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  }

  onSubmit() {

    if (this.user.key) {

    } else {
      this.userService.insert(this.user);
    }
    
    this.router.navigate(['/users']);
  }

}
