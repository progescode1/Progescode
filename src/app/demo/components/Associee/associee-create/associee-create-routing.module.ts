import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssocieeCreateComponent } from './associee-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: AssocieeCreateComponent }
	])],
	exports: [RouterModule]
})
export class AssocieeCreateRoutingModule { }
