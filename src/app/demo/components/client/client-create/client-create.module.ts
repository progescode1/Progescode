// ClientCreateModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component'; // Importez le composant ClientComponent ici

import { ClientRoutingModule } from '../client-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { ProfileCreateComponent } from '../../profile/create/profilecreate.component';
import { ClientCreateRoutingModule } from './client-create-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientCreateRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule,MultiSelectModule,
   
  ],
  declarations: [ ClientComponent]
})
export class ClientCreateModule { }
