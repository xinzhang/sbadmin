import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';

import {AuthService} from '../../../services/auth.service';

@Component({
	selector : 'login-cmp',
	templateUrl : './pages/login/components/login.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [AuthService]
})

export class LoginComponent {
	name:string;
	password:string;

	constructor(private _authService:AuthService, private _router:Router){
	}

	login():void {		
		this._authService.login(this.name, this.password);
		this._router.navigateByUrl('/dashboard/home');
	}

}
