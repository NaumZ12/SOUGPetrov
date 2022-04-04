import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() title:string = '';
  @Input() text:string = '';
  @Input() button:string = '';


  @Input() title2:string = '';
  @Input() text2:string = '';
  @Input() button2:string = '';

  @Input() title3:string = '';
  @Input() text3:string = '';
  @Input() button3:string = '';

  ngOnInit(): void {
  }

}
