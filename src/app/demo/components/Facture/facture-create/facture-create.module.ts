import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureCreateRoutingModule } from './facture-create-routing.module';
import { FactureCreateComponent } from './facture-create.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FactureCreateRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule,MultiSelectModule,
   
  ],
  declarations: [ FactureCreateComponent]
})
export class FactureCreateModule { }
