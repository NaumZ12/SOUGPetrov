import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-feed',
  templateUrl: './nav-feed.component.html',
  styleUrls: ['./nav-feed.component.scss']
})
export class NavFeedComponent implements OnInit {
  @Input() title:string = '';

  @Input() moto1:string = '';
  @Input() moto2:string = '';

  @Input() sub_moto1:string = '';
  @Input() sub_moto2:string = '';

  @Input() about:string = '';
  @Input() contact:string = '';

  @Input() about_text:string = '';
  @Input() contact_text:string = '';



  constructor() { }

  ngOnInit(): void {
  }

}
