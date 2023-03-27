import { Component } from '@angular/core';
import { SharedService } from '@demo-workspace/shared-lib';
import { AuthService } from '@demo/auth-lib';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {

  constructor(private authService: AuthService, public shared: SharedService) {
    this.shared.text = "wriiten by mfe1";
  }


  userName = this.authService.userName;

  search() {
    alert('Not implemented for this demo!');
  }

  terms() {
    alert('Not implemented for this demo!');
  }

}
