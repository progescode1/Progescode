import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from '../profile/profile-routing.module';
import { ClientRoutingModule } from './client-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,   	MultiSelectModule,
    FormsModule, 
],
})
export class ClientModule { }
