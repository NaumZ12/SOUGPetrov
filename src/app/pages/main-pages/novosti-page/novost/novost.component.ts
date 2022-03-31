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
  @Input()  img:string = '';


   novosti = [
    {title: "Sport", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Natprevar", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg" },
    {title: "Angliski", date: "3/29/2022", by: "Naum Zlatanovski",   img: "./assets/images/sport.jpeg"},
    {title: "Francuski", date: "3/29/2022", by: "Naum Zlatanovski",   img: "./assets/images/sport.jpeg"},
    {title: "Makedonski", date: "3/29/2022", by: "Naum Zlatanovski", img: "./assets/images/sport.jpeg" },
    {title: "Programiranje", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Web strani", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Matematika", date: "3/29/2022", by: "Naum Zlatanovski", img: "./assets/images/sport.jpeg" },
    {title: "Erasmus", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Sou gjorce petrov", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Dramska sekcija", date: "3/29/2022", by: "Naum Zlatanovski", img: "./assets/images/sport.jpeg" },
    {title: "Poetski Tvori", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Zavrsna smetka 2022", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Zavrsna smetka 2021", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},
    {title: "Zavrsna smetka 2020", date: "3/29/2022", by: "Naum Zlatanovski",  img: "./assets/images/sport.jpeg"},

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
