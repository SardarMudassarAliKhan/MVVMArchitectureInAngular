import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AccountModule } from '../account/account.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    AccountModule,
    NgbModule
  ]
})
export class DeveloperModule { }
