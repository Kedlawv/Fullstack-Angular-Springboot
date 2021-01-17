import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HelloWorldBean, WelcomeDataService} from '../service/data/welcome-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage(): void {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    console.log('last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response: HelloWorldBean): void {
    console.log(response);
    console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

}
