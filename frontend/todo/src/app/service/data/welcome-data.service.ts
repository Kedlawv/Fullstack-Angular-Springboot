import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log('executeHelloWorldBeanService()');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string): Observable<HelloWorldBean> {
    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    const header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-bean-name/${name}`
      , {headers: header}
    );
  }

  createBasicAuthenticationHttpHeader(): string {
    const username = 'user';
    const password = 'password';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
