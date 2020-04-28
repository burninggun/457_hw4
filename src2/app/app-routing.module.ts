import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'placedetail',
    loadChildren: () => import('./tab/placedetail/placedetail.module').then( m => m.PlacedetailPageModule)
  },
  {
    path: 'placedetail',
    loadChildren: () => import('./tab1/placedetail/placedetail.module').then( m => m.PlacedetailPageModule)
  },
  {
    path: 'offerdetail',
    loadChildren: () => import('./tab2/offerdetail/offerdetail.module').then( m => m.OfferdetailPageModule)
  },
  {
    path: 'newoffer',
    loadChildren: () => import('./tab2/newoffer/newoffer.module').then( m => m.NewofferPageModule)
  },
  {
    path: 'editoffer',
    loadChildren: () => import('./tab2/editoffer/editoffer.module').then( m => m.EditofferPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
