import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegimeCreateComponent } from '../../Regime/regime-create/regime-create.component';
import { ServiceCreateComponent } from './service-create.component';



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ServiceCreateComponent }
	])],
	exports: [RouterModule]
})
export class ServiceCreateRoutingModule { }
