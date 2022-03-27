import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {
  @Input() links:string = "";
  @Input() bg: string = "#90CAF9 ";
  @Input() text_color: string = "";
  @Input() text: string = "";
  @Input() hover:boolean = false;


  constructor() {

   }

  ngOnInit(): void {
  }

}
