import { Component, OnInit } from '@angular/core';
import { CajerosService } from './../../services/cajeros.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-list-cajeros',
  templateUrl: './list-cajeros.component.html',
  styleUrls: ['./list-cajeros.component.css']
})
export class ListCajerosComponent implements OnInit {


  constructor(private cajerosService: CajerosService,
    private router: Router, private toaster: ToastrService) { }
  cajeros: any = [];

  ngOnInit() {
    this.getCajeros();
    this.getEnUsers();
  }

  getCajeros() {
    this.cajerosService.getCajeros().subscribe(

      res => {
        this.cajeros = res,
          this.getEnUsers();
        console.log(this.cajeros)
      },
      err => console.log(err)
    )
  }

  eliminarCajero(id: number) {
    if (confirm('¿Esta seguro que desea eliminar?')) {
      this.cajerosService.deleteCajero(id).subscribe(
        res => {
          console.log(res),
            this.getCajeros(),
            this.toaster.error('Usuario elimando', 'Eliminado');
        },
        err => {
          console.log(err),
            this.getCajeros(),
            this.toaster.error('Usuario elimando', 'Eliminado')
        }
      )
    }
  }

  editar(id: number) {
    console.log('id : ' + id)
    this.router.navigate([`/new_cajero/${id}`]);
  }
  enableUser(id: number) {
    this.cajerosService.enableUS(id).subscribe(
      res => {
        this.getCajeros();
        this.toaster.success('Usuario Habilitado');
      },
      err => {
        console.log(err),
          this.getCajeros(),
          this.toaster.success('Usuario Habilitado', '', {
            positionClass: 'toast-bottom-right',
          });

      }
    )
  }
  disableUser(id: number) {
    this.cajerosService.disableUS(id).subscribe(
      res => {
        this.getCajeros(),
          this.toaster.warning('Usuario xd Deshabilitado', 'xD', {
            progressBar: true,
            positionClass: 'toast-bottom-right'
          });
      },
      err => {
        console.log(err),
          this.toaster.warning('Usuario Deshabilitado', '', {
            progressBar: true,
            positionClass: 'toast-bottom-right'
          }),
          this.getCajeros();
      }
    )
  };

  EnabledUsers: any = [];

  getEnUsers() {
    this.cajerosService.gerEnableUsers().subscribe(
      res => {
        this.EnabledUsers = res,

          console.log(res)

      },
      erro => {
        console.log(erro)
      }
    )
  }
}
