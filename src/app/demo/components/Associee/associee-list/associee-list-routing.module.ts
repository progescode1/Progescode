import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssocieeListComponent } from './associee-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: AssocieeListComponent }
	])],
	exports: [RouterModule]
})
export class AssocieeListRoutingModule { }
