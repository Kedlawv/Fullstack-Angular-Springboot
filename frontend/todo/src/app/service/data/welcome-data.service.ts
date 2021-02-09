import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../app.constants';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeHelloWorldBeanService(): Observable<HelloWorldBean> {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    // console.log('executeHelloWorldBeanService()');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string): Observable<HelloWorldBean> {

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-bean-name/${name}`);
  }

  createBasicAuthenticationHttpHeader(): string {
    const username = 'user';
    const password = 'password';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
