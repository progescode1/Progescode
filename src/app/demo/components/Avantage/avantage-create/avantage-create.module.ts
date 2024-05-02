import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvantageCreateRoutingModule } from './avantage-create-routing.module';
import { AvantageCreateComponent } from './avantage-create.component';
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
    AvantageCreateRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    InputTextareaModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  declarations: [ AvantageCreateComponent]
})
export class AvantageCreateModule { }
