import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from '../account/account.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NavigationBarComponent,
    HomeComponent
  ]
})
export class CoreModule { }
