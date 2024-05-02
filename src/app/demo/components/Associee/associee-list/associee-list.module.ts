import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssocieeRoutingModule } from '../associee-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { AssocieeListComponent } from './associee-list.component';
import { AssocieeListRoutingModule } from './associee-list-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  imports: [
  CommonModule,
  AssocieeListRoutingModule,
  RippleModule,
  ButtonModule,
  InputTextModule,
  TableModule,
  ProgressBarModule,ConfirmDialogModule
  ],
  declarations: [AssocieeListComponent],
  providers: [ConfirmationService] 
})
export class AssocieeListModule { }
