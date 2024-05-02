// ClientListModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientListComponent } from './client-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    ClientListRoutingModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,ConfirmDialogModule
  ],
  declarations: [ClientListComponent],
  providers:[ConfirmationService]
})
export class ClientListModule { }
