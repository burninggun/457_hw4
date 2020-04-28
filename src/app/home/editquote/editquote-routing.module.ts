import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditquotePage } from './editquote.page';

const routes: Routes = [
  {
    path: '',
    component: EditquotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditquotePageRoutingModule {}
