import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCompletedPage } from './add-completed.page';

const routes: Routes = [
  {
    path: '',
    component: AddCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCompletedPageRoutingModule {}
