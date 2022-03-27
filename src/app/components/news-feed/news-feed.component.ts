import { Component, OnInit } from '@angular/core';



interface News {
  img:string;
  text:string;
}



@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
