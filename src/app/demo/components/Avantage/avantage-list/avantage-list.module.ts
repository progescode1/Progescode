import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvantageListRoutingModule } from './avantage-list-routing.module';
import { AvantageListComponent } from './avantage-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  imports: [
    CommonModule,
    AvantageListRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,ConfirmDialogModule
  ],
  declarations: [AvantageListComponent],
  providers:[ConfirmationService]
})
export class AvantageListModule { }
