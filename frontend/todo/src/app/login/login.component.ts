import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'kedlaw';
  password = 'password';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.username === 'kedlaw' && this.password === 'password') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
    console.log(this.password);
  }

}
