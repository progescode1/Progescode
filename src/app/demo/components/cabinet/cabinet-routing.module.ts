import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({imports: [RouterModule.forChild([
  { path: 'list', data: {breadcrumb: 'List'}, loadChildren: () => import('./cabinet-list/cabinet-list.module').then(m => m.CabinetListModule)},
  { path: 'create', data: {breadcrumb: 'Create'}, loadChildren: () => import('./cabinet-create/cabinet-create.module').then(m => m.CabinetCreateModule) },
  { path: '**', redirectTo: '/notfound' }
])],
exports: [RouterModule]
})
export class CabinetRoutingModule { }
