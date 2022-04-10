import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() contact:string = '';
  @Input() category:string = '';
  @Input() location:string = '';
  @Input() loc:string = '';
  @Input() map:string = '';

  @Input() link1:string = '';
  @Input() link2:string = '';
  @Input() link3:string = '';
  @Input() link4:string = '';
  @Input() link5:string = '';
  @Input() link6:string = '';




  @Input() route1:string = '';
  @Input() route2:string = '';
  @Input() route3:string = '';
  @Input() route4:string = '';
  @Input() route5:string = '';
  @Input() route6:string = '';


  @Input() by:string= '';
  @Input() naum:string = '';
  @Input() viko:string = '';
  @Input() ivan:string = '';
  @Input() stefan:string = '';



  ngOnInit(): void {
  }

}
