import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(form:NgForm) {

    console.log(form.value)

  }

}
