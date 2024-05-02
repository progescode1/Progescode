import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureRoutingModule } from './facture-routing.module';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  imports: [
  CommonModule,
  FactureRoutingModule,   	MultiSelectModule,
  FormsModule, 
],
})
export class FactureModule { }
