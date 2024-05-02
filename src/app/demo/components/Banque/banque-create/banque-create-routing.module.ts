import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanqueCreateComponent } from './banque-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: BanqueCreateComponent }
	])],
	exports: [RouterModule]
})
export class BanqueCreateRoutingModule { }
