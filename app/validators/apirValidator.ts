import { Control } from '@angular/common';
import {Injectable} from '@angular/core';

interface ValidationResult {
    [key: string]: boolean;    
}

@Injectable()
export class APIRValidator {

    constructor() { }
    
    apirPattern(control: Control): ValidationResult {
        var code = control.value.charAt(0);
        
        if (control.value != "" &&
            //((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122))
            !isNaN(code)
        ) {
            return { "startsWithNumber": true };
        }

        return null;
    }
}