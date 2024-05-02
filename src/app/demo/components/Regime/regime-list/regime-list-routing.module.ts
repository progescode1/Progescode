import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimeListComponent } from './regime-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: RegimeListComponent }
	])],
	exports: [RouterModule]
})
export class RegimeListRoutingModule { }
