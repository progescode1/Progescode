import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebourCreateRoutingModule } from './debour-create-routing.module';
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
import { ClientComponent } from '../../client/client-create/client.component';
import { DebourCreateComponent } from './debour-create.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DebourCreateRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule,MultiSelectModule,
   
  ],
  declarations: [ DebourCreateComponent]
})
export class DebourCreateModule { }
