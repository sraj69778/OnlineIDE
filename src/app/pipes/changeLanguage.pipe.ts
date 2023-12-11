import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'changeLanguage'
})
export class ChangeLanguage implements PipeTransform{
     transform(value: any) {
        console.log("Value",value);
        
    }

}