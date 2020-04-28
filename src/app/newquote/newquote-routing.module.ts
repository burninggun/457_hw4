import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewquotePage } from './newquote.page';

const routes: Routes = [
  {
    path: '',
    component: NewquotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewquotePageRoutingModule {}
