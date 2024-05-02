import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebourCreateComponent } from './debour-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: DebourCreateComponent }
	])],
	exports: [RouterModule]
})
export class DebourCreateRoutingModule { }
