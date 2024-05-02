import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebourListComponent } from './debour-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: DebourListComponent }
	])],
	exports: [RouterModule]
})
export class DebourListRoutingModule { }
