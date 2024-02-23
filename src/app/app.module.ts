import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ManagerModule } from './manager/manager.module';
import { DeveloperModule } from './developer/developer.module';
import { PublicUserModule } from './public-user/public-user.module';
import { AccountModule } from './account/account.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ManagerModule,
    DeveloperModule,
    PublicUserModule,
    AccountModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
