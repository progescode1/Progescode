import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetListComponent } from './cabinet-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

import { CabinetListRoutingModule } from './cabinet-list-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({ 
  imports: [
  CommonModule,
  CabinetListRoutingModule,
  RippleModule,
  ButtonModule,
  InputTextModule,
  TableModule,
  ProgressBarModule,ConfirmDialogModule
],
declarations: [CabinetListComponent],
providers:[ConfirmationService]
})
export class CabinetListModule { }
