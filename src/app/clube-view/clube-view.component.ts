import { Component, OnInit } from '@angular/core';
import { Clube } from '../model/clube.model';
import { ClubeService } from '../service/clube.service';

@Component({
  selector: 'app-clube-view',
  templateUrl: './clube-view.component.html',
  styleUrls: ['./clube-view.component.css']
})
export class ClubeViewComponent implements OnInit {

  clubes:Clube[] = []

  constructor(private service:ClubeService) { }

  ngOnInit(): void {

    this.service.obterTabelaCampeonatoBrasileiro().subscribe(result => {
      console.log(result )

      this.clubes = result as Clube[]



      this.clubes.map(clube => {
        console.log(clube.time.nome_popular)
      })

    })


    // this.clubes.push(
    //   {
    //     estadio: 'Fonte Nova',
    //     nome: 'Bahia',
    //     pontos: 10,
    //     titulos: 2,
    //     urlLogo: 'https://logodownload.org/wp-content/uploads/2017/02/e-c-bahia-logo-escudo.png'
    //   },
    //   {
    //     estadio: 'Arena',
    //     nome: 'Grêmio',
    //     pontos: 20,
    //     titulos: 3,
    //     urlLogo: 'https://i2.wp.com/dreamleaguesoccer.com.br/wp-content/uploads/2016/10/gr%C3%AAmio-escudo.png?fit=512%2C512&ssl=1'
    //   },
    // )

  }

}
