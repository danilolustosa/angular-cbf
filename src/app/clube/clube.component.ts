import { Component, Input, OnInit } from '@angular/core';
import { Clube } from '../model/clube.model';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})
export class ClubeComponent implements OnInit {

  @Input() clube?:Clube
  // titulos:Titulo[] = [];


  constructor() { }

  ngOnInit(): void {

    // if (this.clube)
    //   for (let index = 0; index < this.clube?.titulos; index++) {
    //     this.titulos.push(
    //       {
    //         url: "https://cdn.picpng.com/star/icon-star-32065.png"
    //       }
    //     )
    //   }


 }

}

interface Titulo {
  url:string;
}
