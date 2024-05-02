import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureListComponent } from './facture-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FactureListComponent }
	])],
	exports: [RouterModule]
})
export class FactureListRoutingModule { }
