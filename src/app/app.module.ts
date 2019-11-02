import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { AddClientesComponent } from './add-clientes/add-clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ListClientesComponent,
    AddClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
