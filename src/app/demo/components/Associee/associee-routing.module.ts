import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./associee-list/associee-list.module').then(m => m.AssocieeListModule)},
    { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./associee-create/associee-create.module').then(m => m.AssocieeCreateModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class AssocieeRoutingModule { }
