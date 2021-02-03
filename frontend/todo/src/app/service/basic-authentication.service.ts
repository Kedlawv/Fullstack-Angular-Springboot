import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) {
  }


  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('authToken');
  }

  executeAuthenticationService(username: string, password: string): Observable<AuthenticationBean> {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`
      , {headers: header}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('authToken', basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser(): any {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(): any {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('authToken');
    }
  }
}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
