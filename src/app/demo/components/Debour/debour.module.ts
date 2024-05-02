import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebourRoutingModule } from './debour-routing.module';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  imports: [
    CommonModule,
    DebourRoutingModule,   	MultiSelectModule,
    FormsModule, 
],
})
export class DebourModule { }
