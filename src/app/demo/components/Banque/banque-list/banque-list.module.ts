import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanqueListRoutingModule } from './banque-list-routing.module';
import { BanqueListComponent } from './banque-list.component';
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
    BanqueListRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,ConfirmDialogModule
  ],
  declarations: [BanqueListComponent],
  providers:[ConfirmationService]
})
export class BanqueListModule { }
