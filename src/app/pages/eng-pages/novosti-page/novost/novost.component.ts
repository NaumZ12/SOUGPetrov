import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-novost',
  templateUrl: './novost.component.html',
  styleUrls: ['./novost.component.scss']
})
export class NovostComponent implements OnInit {


  @Input()  title:string = '';
  @Input()  date:string = '';
  @Input()  by:string = '';
  @Input()  img:string = '';
  @Input()  link:string = '';




  constructor() { }

  ngOnInit(): void {
  }

}
