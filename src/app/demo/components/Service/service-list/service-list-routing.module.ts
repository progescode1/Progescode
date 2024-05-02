import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ServiceListComponent }
	])],
	exports: [RouterModule]
})
export class ServiceListRoutingModule { }
