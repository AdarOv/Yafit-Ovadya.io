import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.css']
})
export class NavBtnComponent implements OnInit {
  @Input() name;
  @Input() url;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeTo(){
    this.router.navigate([this.url]);
  }
}
