import { Component, OnInit } from '@angular/core';
import { Plato } from './../../interfaces/plato';
import { PlatosService } from 'src/app/services/platos.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {

  food: Plato = {
    precio: null,
    cantidad: null,
    nombre: '',
    url: '',
    descripcion: ''
  };
  edit = false;

  ngOnInit() {


  }

  constructor(
    private foodService: PlatosService,
    private route: Router,
    private activedRouter: ActivatedRoute,
    private toatr: ToastrService
  ) {

    const paramsId = this.activedRouter.snapshot.params;
    if (paramsId.id) {
      this.foodService.getOneFood(paramsId.id).subscribe(
        res => {
          this.food = res,
            console.log(res),
            this.edit = true
        },
        err =>
          console.log(err)
      )
    }
  }



  newPlato() {
    this.foodService.newFood(this.food).subscribe(
      res => {
        console.log(res),
          this.route.navigate(['/foods']),
          this.toatr.success('Plato añadido', 'Nuevo Plato', {
            positionClass: 'toast-bottom-right'
          });
      },
      err => console.log(err)
    );
  }

  getPlatos() {
    this.foodService.getFoods().subscribe(
      res => {
        this.food = res,
          console.log(this.food)
      },
      err => {
        console.log(err)
      }
    )
  }

  updatePlato() {
    this.foodService.updateFood(this.food).subscribe(
      res => {
        console.log(res),
          this.route.navigate(['/foods']),
          this.toatr.info('Plato actualizado', 'Edición', {
            positionClass: 'toast-bottom-right'
          });
      },
      err => {
        console.log(err),
          this.toatr.info('Plato actualizado');

      }
    )
  }

}
