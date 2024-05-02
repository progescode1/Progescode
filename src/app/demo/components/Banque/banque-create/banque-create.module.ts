import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanqueCreateRoutingModule } from './banque-create-routing.module';
import { BanqueCreateComponent } from './banque-create.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BanqueCreateRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule,MultiSelectModule
  ],
  declarations: [ BanqueCreateComponent]
})
export class BanqueCreateModule { }
