// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AccountServiceService, private router: Router) {}

  canActivate(): boolean {
    debugger;
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['account/login']); // Redirect to login page if not authenticated
      return false;
    }
  }
}
