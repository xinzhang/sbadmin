import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
	selector : 'asset-management',
	templateUrl : './pages/request/components/asset-management.html',
	directives: [ROUTER_DIRECTIVES],
	providers: []
})

export class AssetManagementComponent {
	
	title:string = "Asset Management";

	constructor(){
	}

    submit():void {
        console.log("asset management submitted.");        
    }


}
