import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'Burgers';
  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log("Sing in successful !");
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['burgers']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    console.log("Sing out successful !");
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['']);
  }

}
