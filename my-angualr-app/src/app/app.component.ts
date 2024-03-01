import { Component, HostListener,Input } from '@angular/core';
import { Case2 } from './case2';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`h1{color:red}`],
  viewProviders: [Case2],
})
export class AppComponent {
  title = 'my-angualr-app';
  @HostListener(`click`,[`$event`])
  show(){alert("hello with hostlistner");}
  constructor(private _obj:Case2){
    _obj.show();
  }
  // constructor(private_obj:ChildComponent){

  // }
  // parentdata = "Some data to pass to the child component";
}
  
