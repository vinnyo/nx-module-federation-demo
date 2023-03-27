import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    public text: string = "";
    constructor() {
        console.log("##> shared service constructor")
    }
}