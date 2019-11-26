import { Component, OnInit } from '@angular/core';
import { PlatosService } from 'src/app/services/platos.service';
import { Plato } from 'src/app/interfaces/plato';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-foods',
  templateUrl: './list-foods.component.html',
  styleUrls: ['./list-foods.component.css']
})
export class ListFoodsComponent implements OnInit {
  foods: any = [];
  constructor(private foodsService: PlatosService,
    private toster: ToastrService) { }

  thereFoods = false;
  ngOnInit() {
    this.getPlatos();
  }

  getPlatos() {
    this.foodsService.getFoods().subscribe(
      res => {
        this.foods = res,
          console.log(this.foods),
          this.thereFoods = true;
      }, err => {
        console.log(err);
        this.thereFoods = false;
      }
    )
  }

  deletePlato(id: number) {
    this.foodsService.deteteFood(id).subscribe(
      res => {
        console.log(res),
          this.toster.error('Plato eliminado'),
          this.getPlatos()
      },
      err => {
        this.toster.error('Plato eliminado','',{
          positionClass:'toast-bottom-right'
        }),
          console.log(err),
          this.getPlatos();
      }
    );
  }

}
