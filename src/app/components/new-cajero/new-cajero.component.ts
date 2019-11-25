import { Component, OnInit } from '@angular/core';
import { CajerosService } from './../../services/cajeros.service';
import { Cajero } from '../../interfaces/cajero';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-new-cajero',
  templateUrl: './new-cajero.component.html',
  styleUrls: ['./new-cajero.component.css']
})
export class NewCajeroComponent implements OnInit {

  edit: boolean = false;
  constructor(
    private CajeroService: CajerosService,
    private route: Router,
    private activedRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {

    const paramsId = this.activedRouter.snapshot.params;
    if (paramsId.id) {
      this.CajeroService.getOne(paramsId.id).subscribe(
        res => {
          this.caj = res,
            console.log(res),
            this.edit = true
        },
        err =>
          console.log(err)
      )
    }
  }


  caj: Cajero = {
    nombre: '',
    apellido: '',
    rol: 'Mañana',
    direccion: '',
    activo: false,
    image: ''
  };

  ngOnInit() {

  }
  newCajero() {
    console.log(this.caj);
    this.CajeroService.newCajero(this.caj).subscribe(
      res => {
        console.log(res),
          this.route.navigate(['/cajeros']),
          this.toastr.success('Registrado satisfactoriamente','Nuevo Registro');
      },
      err => {
        console.log(err)
      }
    )
  }
  actualizarCajero() {
    this.CajeroService.updateCajero(this.caj).subscribe(
      res => {
        this.route.navigate(['/cajeros']),
          this.toastr.info('Cajero actualizado');
      },
      err => {
        console.log(err),
          this.route.navigate(['/cajeros']);
      }

    )
  }

}
