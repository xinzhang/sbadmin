import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class DistributionService {
    private _distribuiton_piechart_url = '/api/distribution/piechart.json';

    constructor(private _http: Http) { }

    list(): Observable<any> {
        
        var result = this._http.get(this._distribuiton_piechart_url)
            .map(res => res.json());

        result.subscribe(
                data => {
                    console.log('service:');
                    console.log(data);              
                },
                err =>this.logError(err),
                () => console.log('load piechart completed and executed in service side')
            )

        return result;

    }

    logError(err:any) {
        console.error("There was an error: ");
        console.log(err);
    }

}

