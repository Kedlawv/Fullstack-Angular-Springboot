import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

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


  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log('before: ' + this.hardcodedAuthenticationService.isUserLoggedIn());
    if ( this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
      console.log('after: ' + this.hardcodedAuthenticationService.isUserLoggedIn());

    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
    console.log(this.password);
  }

}
