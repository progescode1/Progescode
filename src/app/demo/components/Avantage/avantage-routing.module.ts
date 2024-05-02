import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
  { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./avantage-list/avantage-list.module').then(m => m.AvantageListModule)},
  { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./avantage-create/avantage-create.module').then(m => m.AvantageCreateModule) },
  { path: '**', redirectTo: '/notfound' }
])],
exports: [RouterModule]
})
export class AvantageRoutingModule { }
