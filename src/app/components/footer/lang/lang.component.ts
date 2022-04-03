import { Component, OnInit } from '@angular/core';

interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
