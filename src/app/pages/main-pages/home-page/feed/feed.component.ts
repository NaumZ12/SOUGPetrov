import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  images = [
    {
      imageSrc: './assets/images/sport.jpeg',
      imageAlt: 'Sport',

    },
    {
      imageSrc: './assets/images/sport2.gif',
      imageAlt: 'Sport',

    },
    {
      imageSrc: './assets/images/sport3.jpeg',
      imageAlt: 'Sport',

    },
    {
      imageSrc: './assets/images/sport4.jpeg',
      imageAlt: 'Sport',

    },
    {
      imageSrc: './assets/images/sport5.jpeg',
      imageAlt: 'Sport',

    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
