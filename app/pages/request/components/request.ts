import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {RequestListComponent} from './request-list';
import {RequestFilterComponent} from './request-filter';

@Component({
	selector : 'request',
	templateUrl : './pages/request/components/request.html',
	directives: [ROUTER_DIRECTIVES, RequestListComponent, RequestFilterComponent],
	providers: []
})

export class RequestComponent {
}
