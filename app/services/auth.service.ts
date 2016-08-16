import {Injectable} from '@angular/core';
//import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Crypto} from './crypto.util';

@Injectable()
export class AuthService {
    private _login_url = '/auth/login';

    //constructor(private _http: Http) { }

    

    login(username:string, password: string): Observable<any> {
        
        console.log(username);
        var crypto = new Crypto();    
        var encpassword =crypto.encode(password);

        console.log(encpassword);


        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

        // return this._http.post(this._login_url, JSON.stringify(data), options)
        //     .map(resp => resp.json())
        //     .catch(this.handleError);
        return null;
    }

}

