import {Component} from '@angular/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from '@angular/common';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
	selector : 'asset-management',
	templateUrl : './pages/request/components/asset-management.html',
	directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
	providers: []
})

export class AssetManagementComponent {
	
	title:string = "Asset Management";
	apirValidation:string = "[a-z|A-Z]{3}[0-9]{4}[a-z|A-Z]{2}|[a-z|A-Z]{4}[0-9]{4}[a-z|A-Z]";
	submitted:boolean = false;

    public apirCode: Control;
    public mlcRequestAssetManagementForm: ControlGroup;

	constructor(private builder: FormBuilder){
		this.apirCode = new Control(
            "",
            Validators.compose([Validators.required, Validators.pattern(this.apirValidation)])
        );

		this.mlcRequestAssetManagementForm = builder.group({
            apirCode: this.apirCode
        });
	}

    submit():void {
		this.submitted = true;
        console.log("asset management submitted.");        
    }


}
