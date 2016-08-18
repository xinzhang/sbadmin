import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


class RequestFilter {
    requestType:string = "";
    requestStatus:string = "";
}

@Component({
	selector : 'request-filter',
	templateUrl : './pages/request/components/request-filter.html',
	directives: [ROUTER_DIRECTIVES],
	providers: []
})

export class RequestFilterComponent {
	
    selectionRequestStatuses = ['Pending', 'Received', 'Accepted', 'Review', 'Error', 'Success', 'AwaitingAuthorisation'];    
    selectionRequestTypes = ['Asset Management', 'Off Book Trades', 'Hardship Withdrawal', 'Virtual Cash'];

    filterObject : RequestFilter = new RequestFilter();
    query: string;

	constructor(){
	}

    setFilterObject(): void {
        console.log("set filter object");        
    }
        
}
