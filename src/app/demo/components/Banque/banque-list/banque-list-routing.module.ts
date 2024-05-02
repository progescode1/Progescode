import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanqueListComponent } from './banque-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  
  imports: [RouterModule.forChild([
		{ path: '', component: BanqueListComponent }
	])],
	exports: [RouterModule]
})
export class BanqueListRoutingModule { }
