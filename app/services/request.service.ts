import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class RequestService {
    private _request_url = '/api/request.json';

    constructor(private _http: Http) { }

    list(): Observable<any> {
        
        var result = this._http.get(this._request_url)
            .map(res => res.json());

        result.subscribe(
                data => {
                    console.log('service:');
                    console.log(data);              
                },
                err =>this.logError(err),
                () => console.log('load users completed and executed in service side')
            )

        return result;

    }

    logError(err:any) {
        console.error("There was an error: ");
        console.log(err);
    }

}

