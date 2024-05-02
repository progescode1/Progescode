import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvantageRoutingModule } from './avantage-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    AvantageRoutingModule
],
exports: [RouterModule]

})
export class AvantageModule { }
