import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Crypto} from './crypto.util';

@Injectable()
export class AuthService {
    private _login_url = 'http://192.168.10.54:9092/token';
    private _user_url = '/api/user.json';

    constructor(private _http: Http) { }

    login(username:string, password: string): Observable<any> {
        
        var crypto = new Crypto();    
        var encpassword = crypto.encode(password);
        var data = "grant_type=password&username=" + username + "&password=" + encpassword;
        var headers = new Headers();  
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        //var result = this._http.post(this._login_url, data, {headers: headers})
        //    .map(response => response.json());
        var result = this._http.get(this._user_url)
            .map(res => res.json());

        result.subscribe(
                data => {
                    console.log('service:');
                    console.log(data);              
                },
                err =>this.logError(err),
                () => console.log('load users completed and executed in service side')
            )

        // result.subscribe( 
        //     data => this.storeToken(data),
        //     err => this.logError(err),
        //     () => console.log('Authentication Complete')
        // );        

        return result;

    }

    logError(err:any) {
        console.error("There was an error: ");
        console.log(err);
    }

    storeToken(response:any) {
        console.log(response);
    }

}

