import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { UserDataService } from '../shared/user-data.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User;
  title: string = '';
  emailPatterns: string = '';
  userErrors: string = '';
  emailSended: string = '';

  constructor(private userService: UserService, private userDataService: UserDataService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.user = new User();
    this.title = "Criar Usuário";
    this.emailPatterns = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    const key = this.route.snapshot.paramMap.get('key');
   
    if (key) {
      this.userService.getOne(key).subscribe(resp => {
        this.user = resp;
        this.title = "Editar Usuário";
      });
    }
  }

  onSubmit() {
    if (this.user.key) {

    } else {
      if (this.user.uid) {
        this.userService.insert(this.user);
      } else {
        this.userService.register(this.user)
        .then((data: any) => {
          console.log("registrado com sucesso");
          this.user.uid = data.user.uid;
          this.userService.insert(this.user);
          this.router.navigate(['/users']);
        }).catch((err) => {
          console.log(err);
          this.userErrors = err;
        });
      }
    }
  }

  recovery(user: User) {
    this.userService.resetPassword(user.email).
      then((res)=> {
        this.emailSended = "ok";
        console.log("Email enviado.");
      }).catch(() => {
        console.log("Erro de envio");
      });
  }

}
