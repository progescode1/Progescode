import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegimeCreateComponent } from './regime-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: RegimeCreateComponent }
	])],
	exports: [RouterModule]
})
export class RegimeCreateRoutingModule { }
