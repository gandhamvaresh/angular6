import { Component,OnInit } from '@angular/core';
import { SignIn } from './signIn'

@Component({
  selector: 'app-sign',
  templateUrl: './signIn.component.html'
//   styleUrls: ['./signIn.component.css']
})
export class SignInComponent  implements OnInit {
    hero: SignIn = {
        id: 1,
        name: 'Windstorm'
        // lname: 'ljl'
      };
    constructor() { }

    ngOnInit() {
    }

}
