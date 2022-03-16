import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoComponent } from './jogo/jogo.component';
import { FormsModule } from '@angular/forms';
import { ClubeViewComponent } from './clube-view/clube-view.component';
import { ClubeComponent } from './clube/clube.component';
import { ClubeService } from './service/clube.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    ClubeViewComponent,
    ClubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    ClubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
