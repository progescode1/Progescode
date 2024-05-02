import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
  { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./regime-list/regime-list.module').then(m => m.RegimeListModule) },
  { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./regime-create/regime-create.module').then(m => m.RegimeCreateModule) },
  { path: '**', redirectTo: '/notfound' }
])],
})
export class RegimeRoutingModule { }
