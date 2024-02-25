import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AccountModule } from '../account/account.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagerDashBoardComponent } from './manager-dash-board/manager-dash-board.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManagerDashBoardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AccountModule,
    NgbModule,
    FormsModule
  ]
})
export class ManagerModule { }
