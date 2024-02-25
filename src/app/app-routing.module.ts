import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ManagerDashBoardComponent } from './manager/manager-dash-board/manager-dash-board.component';
import { AuthGuard } from './account/AuthGuard/auth.guard';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'manager/ManagerDashBoard', component: ManagerDashBoardComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'developer', loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule), canActivate: [AuthGuard]},
  { path: 'public-user', loadChildren: () => import('./public-user/public-user.module').then(m => m.PublicUserModule), canActivate: [AuthGuard]},
  { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule), canActivate: [AuthGuard]},
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
