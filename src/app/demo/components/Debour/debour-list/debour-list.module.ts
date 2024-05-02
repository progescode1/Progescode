import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ClientListComponent } from '../../client/client-list/client-list.component';
import { DebourListComponent } from './debour-list.component';
import { DebourListRoutingModule } from './debour-list-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  imports: [
    CommonModule,
    DebourListRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,ConfirmDialogModule
  ],
  declarations: [DebourListComponent],
  providers:[ConfirmationService]
})
export class DebourListModule { }
