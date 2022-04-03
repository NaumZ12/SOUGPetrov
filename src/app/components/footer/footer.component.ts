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










  ngOnInit(): void {
  }

}
