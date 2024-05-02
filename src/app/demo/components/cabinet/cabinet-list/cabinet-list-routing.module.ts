import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetListComponent } from './cabinet-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: CabinetListComponent }
	])],
	exports: [RouterModule]
})
export class CabinetListRoutingModule { }
