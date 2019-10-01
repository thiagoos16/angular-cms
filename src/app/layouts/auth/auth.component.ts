import { Component, OnInit } from '@angular/core';
import { User } from '../../users/shared/user';
import { Router } from '@angular/router';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: User;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  logout(user) {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
