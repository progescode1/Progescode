import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimeListRoutingModule } from './regime-list-routing.module';
import { RegimeListComponent } from './regime-list.component';
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
    RegimeListRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,ConfirmDialogModule
  ],
  declarations: [RegimeListComponent],
  providers:[ConfirmationService]
})
export class RegimeListModule { }
