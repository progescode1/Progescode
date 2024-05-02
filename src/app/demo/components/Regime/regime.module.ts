import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimeRoutingModule } from './regime-routing.module';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({ imports: [
  CommonModule,
  RegimeRoutingModule,   	MultiSelectModule,
  FormsModule, 
],
})
export class RegimeModule { }
