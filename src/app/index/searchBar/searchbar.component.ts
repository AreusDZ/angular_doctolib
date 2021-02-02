
import { Component } from "@angular/core";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: [
    './searchbar.component.css'
  ]
})
export class SearchBarComponent {

  constructor() {}

  //* Get content of searchbar
  inputValue:string = '';
  onKeyUp(event:Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}
