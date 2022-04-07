import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  @Input() img:string = '';
  @Input() img2:string = '';
  @Input() img3:string = '';
  @Input() img4:string = '';
  @Input() img5:string = '';

  @Input() title:string = '';
  @Input() title2:string = '';
  @Input() title3:string = '';
  @Input()title4:string = '';
  @Input() title5:string = '';

  @Input() link:string = '';
  @Input() link2:string = '';
  @Input() link3:string = '';
  @Input() link4:string = '';
  @Input() link5:string = '';

  @Input() main_link:string = '';
  @Input() main_title:string = '';
  @Input() main_link_text:string = '';



  constructor() { }

  ngOnInit(): void {
  }

}
