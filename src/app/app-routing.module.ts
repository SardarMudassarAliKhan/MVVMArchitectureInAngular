import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'developer', loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule) },
  { path: 'public-user', loadChildren: () => import('./public-user/public-user.module').then(m => m.PublicUserModule) },
  { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
