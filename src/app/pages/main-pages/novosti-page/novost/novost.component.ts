import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-novost',
  templateUrl: './novost.component.html',
  styleUrls: ['./novost.component.scss']
})
export class NovostComponent implements OnInit {

  p: number = 1;
  @Input()  title:string = '';
  @Input()  date:string = '';
  @Input()  by:string = '';
  @Input()  text:string = '';
  @Input()  img:string = '';



  constructor() { }

  ngOnInit(): void {
  }

}
