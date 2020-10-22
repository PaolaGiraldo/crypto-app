import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

import { ChangeComponent } from './change/change.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/exchange',
    pathMatch: 'full'
  },
  {
    path: 'exchange',
    component: ChangeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: '/exchange',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatSelectModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
