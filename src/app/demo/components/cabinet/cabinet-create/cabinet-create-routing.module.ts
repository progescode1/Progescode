import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: CabinetComponent }
	])],
	exports: [RouterModule]
})
export class CabinetCreateRoutingModule { }
