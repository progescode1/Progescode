import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
  { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./banque-list/banque-list.module').then(m => m.BanqueListModule)},
  { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./banque-create/banque-create.module').then(m => m.BanqueCreateModule) },
  { path: '**', redirectTo: '/notfound' }
])],
exports: [RouterModule]
})
export class BanqueRoutingModule { }
