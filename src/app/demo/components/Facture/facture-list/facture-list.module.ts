import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureListRoutingModule } from './facture-list-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { DebourListComponent } from '../../Debour/debour-list/debour-list.component';
import { FactureListComponent } from './facture-list.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  imports: [
    CommonModule,
    FactureListRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,ConfirmDialogModule
  ],
  declarations: [FactureListComponent],
  providers:[ConfirmationService]
})
export class FactureListModule { }
