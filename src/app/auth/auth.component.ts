import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  authStatus:boolean;

  ngOnInit(): void {
    this.authStatus=this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log("Sing in successful !");
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['burgers']);
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    console.log("Sing out successful !");
    this.authStatus = this.authService.isAuth;
  }
}
