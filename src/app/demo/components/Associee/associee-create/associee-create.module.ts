import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssocieeCreateRoutingModule } from './associee-create-routing.module';
import { AssocieeCreateComponent } from './associee-create.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AssocieeCreateRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  declarations: [ AssocieeCreateComponent]
})
export class AssocieeCreateModule { }
