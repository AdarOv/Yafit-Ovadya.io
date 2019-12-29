import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nbutton',
  templateUrl: './nbutton.component.html',
  styleUrls: ['./nbutton.component.css']
})
export class NbuttonComponent implements OnInit {
  @Input() btnName;
  @Input() btnName2;
  @Output() alert = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  down(flag){
    debugger;
    this.alert.emit({up:flag});
  }

}
