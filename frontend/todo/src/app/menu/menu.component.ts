import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn = false;

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit(): void {
    // const isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    // this doesn't work because ngOnInit is called only once on component init
  }

}
