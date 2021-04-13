import { Injectable } from "@angular/core";
import { NativeDateAdapter } from "@angular/material/core";

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {

    format(date: Date, displayFormat: Object): string {

        if (displayFormat === 'input') {

            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            if(month<10){
                return `${year}.0${month}`;
            }
            return `${year}.${month}`;
        }

        return date.toDateString();
    }
}