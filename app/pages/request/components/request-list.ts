import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {RequestService} from '../../../services/request.service';

@Component({
	selector : 'request-list',
	templateUrl : './pages/request/components/request-list.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [RequestService]
})

export class RequestListComponent {
	    
    requestlist:any = [];
    pageRequestList:any = [];

    filterObject : any;
    query: string;
    
	constructor(private reqService:RequestService){
        this.load();
	}

    sortData(col:string): void {
        console.log('sortData column clicked ' +  col);        
    }

    //(r.clientCode, r.requestReference, r.requestType)
    showRequestDetail(clientCode:string, requestReference:string, requestType:string) {
    }

    gotoPage(pageno:number) {
        this.pageRequestList = this.requestlist.slice(pageno * 10, (pageno + 1) * 10);
    }

    load() {
        this.reqService.list()
            .subscribe(
                data => {
                    console.log(data);
                    this.requestlist = data;
                    this.gotoPage(0);
                }                
            )
    }
}
