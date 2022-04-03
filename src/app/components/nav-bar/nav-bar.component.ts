import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() page1:string = '';
  @Input() page2:string = '';
  @Input() page3:string = '';
  @Input() page4:string = '';
  @Input() page5:string = '';
  @Input() page6:string = '';
  @Input() page7:string = '';


  @Input() link1:string = '';
  @Input() link2:string = '';
  @Input() link3:string = '';
  @Input() link4:string = '';
  @Input() link5:string = '';
  @Input() link6:string = '';
  @Input() link7:string = '';





  constructor() { }

  ngOnInit(): void {
  }

}
