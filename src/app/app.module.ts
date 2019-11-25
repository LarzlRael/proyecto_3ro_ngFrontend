import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCajerosComponent } from './components/list-cajeros/list-cajeros.component';
import { NewCajeroComponent } from './components/new-cajero/new-cajero.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IndexComponent } from './components/index/index.component';
/* modelos */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewFoodComponent } from './foods/new-food/new-food.component';
import { ListFoodsComponent } from './foods/list-foods/list-foods.component';

/* animaciones de angular */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListCajerosComponent,
    NewCajeroComponent,
    NavigationComponent,
    IndexComponent,
    NewFoodComponent,
    ListFoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
