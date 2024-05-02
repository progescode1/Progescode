import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
  { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./service-list/service-list.module').then(m => m.ServiceListModule) },
  { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./service-create/service-create.module').then(m => m.ServiceCreateModule) },
  { path: '**', redirectTo: '/notfound' }
])],
})
export class ServiceRoutingModule { }
