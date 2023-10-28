import { Component, Input } from '@angular/core';
import { Router} from "@angular/router";


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
   @Input()foundpage:string = ''

   constructor(private router: Router) {}
 
   changeRouter() {
     this.router.navigate(['', this.foundpage]);
   }
}
