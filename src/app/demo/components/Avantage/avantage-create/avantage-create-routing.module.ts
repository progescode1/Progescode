import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvantageCreateComponent } from './avantage-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: AvantageCreateComponent }
	])],
	exports: [RouterModule]
})
export class AvantageCreateRoutingModule { }
