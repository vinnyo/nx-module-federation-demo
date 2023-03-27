import { Component } from '@angular/core';
import { SharedService } from '@demo-workspace/shared-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'shell';

    constructor(public shared: SharedService) {
        this.shared.text = "written by shell";
    }
}
