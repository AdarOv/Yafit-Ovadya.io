import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onNotify(someFlag) {
    window.alert(`You will be notified when the product goes on sale ${someFlag.up}`);
  }
}
