import { ApiFacturaService } from './../services/api-factura.service';
import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth.service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [{ cliente: "ESE CAMU SAN RAFAEL", nit: "812.001.579-2", tel: "", dir: "CRA 14 NRO 2E - 25 BR LAS MERCEDES", numero: "SSI 00000095", fechaInicio: "01 Ago 2019", fechaFin: "30 Ago 2019", detalles: [{ descripcion: { titulo: "Plataforma Simetria Consolidated Pago NB", cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, officiis impedit! Rem saepe a fugit laboriosam vel perspiciatis odio mollitia alias esse voluptatem perferendis accusantium, tempore, obcaecati nulla laudantium dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, officiis impedit! Rem saepe  fugit laboriosam vel perspiciatis odio mollitia alias esse voluptatem perferendis  accusantium, tempore, obcaecati nulla laudantium ignissimos!" }, unidad: "3500000", cantidad: "1" }], desc: "0" }];

  constructor(private authservice: Auth, private router: Router,
     private api: ApiFacturaService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      
    })
    this.Logout();
  }

  

  enviar_json(clientes) {
    this.api.envio_datos(clientes).subscribe(res => {
      console.log(res);
    });
  }

  Logout(): void {
    this.authservice.logout();
  }

}
