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

import {CurrencyMaskDirective} from '../../../directives/currency-mask';

class AssetManagement {
    ClientCode:string;
    APIRCode:string;
    SecurityName:string;
    AssetType:string;
    AssetStatus:string;    
    OrderAmount:number;
}


@Component({
    selector: 'asset-management',
    templateUrl: './pages/request/components/asset-management.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CurrencyMaskDirective],
    providers: []
})

export class AssetManagementComponent {

    title: string = "Asset Management";
    apirValidation: string = "[a-z|A-Z]{3}[0-9]{4}[a-z|A-Z]{2}|[a-z|A-Z]{4}[0-9]{4}[a-z|A-Z]";
    submitted: boolean = false;

    public apirCode: Control;
    public securityName: Control;
    public assetType: Control;
    public assetStatus: Control;
    public mlcRequestAssetManagementForm: ControlGroup;

    public assetManagement:AssetManagement;

    public APIRCodeVal:string;
    public SecurityNameVal:string;
    
    public assetTypes = [
           { "value": 1, "text": "Asset Onboard" },
           { "value": 2, "text": "Asset Offboard" }
        ]

	public requestStatus = [
           { "value": 1, "text": "Standard" },
           { "value": 2, "text": "Urgent" }
        ]

    constructor(private builder: FormBuilder) {
        this.apirCode = new Control(
            "",
            Validators.compose([Validators.required, Validators.pattern(this.apirValidation)])
        );

        this.securityName = new Control(
            "",
            Validators.compose([Validators.required])
        );

        this.assetStatus = new Control(
            "",
            Validators.compose([Validators.required])
        );

        this.assetType = new Control(
            "",
            Validators.compose([Validators.required])
        );

        this.mlcRequestAssetManagementForm = builder.group({
            apirCode: this.apirCode,
            securityName: this.securityName,
            assetStatus: this.assetStatus,
            assetType: this.assetType
        });

        this.assetManagement = new AssetManagement();
        this.assetManagement.APIRCode = "";
        this.assetManagement.SecurityName = "";
    }

    submit(): void {
        this.submitted = true;
        console.log(this.assetManagement);
        console.log("asset management submitted.");
    }

}
