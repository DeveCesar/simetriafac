import { AddClientesComponent } from './add-clientes/add-clientes.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'clientes/addclientes', component: AddClientesComponent },
  { path: 'addclientes', component: AddClientesComponent},
  { path: 'list-clientes/:id', component: ListClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
