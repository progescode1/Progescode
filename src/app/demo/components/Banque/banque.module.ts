import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanqueRoutingModule } from './banque-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    BanqueRoutingModule
],
exports: [RouterModule]

})
export class BanqueModule { }
