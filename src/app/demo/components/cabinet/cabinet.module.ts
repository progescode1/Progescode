import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from '../client/client-routing.module';
import { CabinetRoutingModule } from './cabinet-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CabinetRoutingModule
],
})
export class CabinetModule { }
