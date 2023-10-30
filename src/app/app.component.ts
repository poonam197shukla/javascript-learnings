import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'javascript-learnings';

  public jslearnFlag: boolean = true;

  jslearn(){
    this.jslearnFlag=true;
  }

  interview(){
    this.jslearnFlag=false
  }
}
