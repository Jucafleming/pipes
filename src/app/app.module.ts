import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import localePT from '@angular/common/locales/pt';
import localeExtraPT from '@angular/common/locales/extra/pt';
import { registerLocaleData } from '@angular/common';
import { FiltroarrayPipe } from './filtroarray.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayPipeImpuroPipe } from './filtro-array-pipe-impuro.pipe';
registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroarrayPipe,
    FiltroArrayPipeImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
