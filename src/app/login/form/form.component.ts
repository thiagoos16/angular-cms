import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users/shared/user.service';
import { User } from '../../users/shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class LoginFormComponent implements OnInit {
  user: User;
  errorLogin: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit() {
    this.userService.login(this.user)
      .then((data: any) => {
        console.log(data);
        this.router.navigate(['/users']);
      }).catch((err) => {
        console.log('error login', err);
        this.errorLogin = err;
      });
  }
}
