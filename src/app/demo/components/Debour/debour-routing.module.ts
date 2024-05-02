import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule(
  { 
    imports: [RouterModule.forChild([
  { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./debour-list/debour-list.module').then(m => m.DebourListModule) },
  { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./debour-create/debour-create.module').then(m => m.DebourCreateModule) },
  { path: '**', redirectTo: '/notfound' }
])],
})
export class DebourRoutingModule { }
