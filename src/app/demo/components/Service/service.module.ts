import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from './service-routing.module';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({imports: [
  CommonModule,
  ServiceRoutingModule,   	MultiSelectModule,
  FormsModule, 
],
})
export class ServiceModule { }
