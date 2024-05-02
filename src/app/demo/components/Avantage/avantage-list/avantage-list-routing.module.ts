import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvantageListComponent } from './avantage-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  
  imports: [RouterModule.forChild([
		{ path: '', component: AvantageListComponent }
	])],
	exports: [RouterModule]
})
export class AvantageListRoutingModule { }
