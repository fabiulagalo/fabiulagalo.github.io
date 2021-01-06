import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { PassosComponent } from './components/passos/passos.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoberturaServicoComponent } from './components/cobertura-servico/cobertura-servico.component';
import { MoHeaderComponent } from './components/mo-header/mo-header.component';
import { MoIntroComponent } from './components/mo-intro/mo-intro.component';
import { MoPassosComponent } from './components/mo-passos/mo-passos.component';
import { MoServicoComponent } from './components/mo-servico/mo-servico.component';
import { MoFooterComponent } from './components/mo-footer/mo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    PassosComponent,
    ParceirosComponent,
    FooterComponent,
    CoberturaServicoComponent,
    MoHeaderComponent,
    MoIntroComponent,
    MoPassosComponent,
    MoServicoComponent,
    MoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
