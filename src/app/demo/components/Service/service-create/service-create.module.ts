import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListRoutingModule } from '../service-list/service-list-routing.module';
import { ServiceCreateComponent } from './service-create.component';
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
import { ServiceCreateRoutingModule } from './service-create-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServiceCreateRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule,MultiSelectModule,
   
  ],
  declarations: [ ServiceCreateComponent]
})
export class ServiceCreateModule { }
