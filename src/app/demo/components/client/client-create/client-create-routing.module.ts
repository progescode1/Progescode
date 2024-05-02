import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ClientComponent }
	])],
	exports: [RouterModule]
})
export class ClientCreateRoutingModule { }
