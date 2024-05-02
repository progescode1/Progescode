import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssocieeRoutingModule } from './associee-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  imports: [
    CommonModule,
    AssocieeRoutingModule,ConfirmDialogModule
],
providers: [ConfirmationService] 
})
export class AssocieModule { }
