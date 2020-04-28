import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'quotedetail/:id',
    loadChildren: () => import('./quotedetail/quotedetail.module').then( m => m.QuotedetailPageModule)
  },
  {
    path: 'editquote/:id',
    loadChildren: () => import('./editquote/editquote.module').then( m => m.EditquotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
