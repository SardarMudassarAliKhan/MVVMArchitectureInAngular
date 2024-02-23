import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AccountModule } from '../account/account.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    AccountModule
  ]
})
export class PublicUserModule { }
