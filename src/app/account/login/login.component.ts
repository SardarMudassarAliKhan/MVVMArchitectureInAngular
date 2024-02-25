import { Component } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { Route, Router } from '@angular/router';
import { error } from 'console';
import Swal from 'sweetalert2';
import { LoginForm } from '../../core/Models/loginform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected styleUrl to styleUrls
})
export class LoginComponent {

  loginForm: LoginForm = { username: '', password: '' };

  constructor(
    private accountService: AccountServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    debugger;
    this.accountService.getAccountDetails(this.loginForm).subscribe(
      response => {
        debugger;
        if (response && response.user && response.role[0] == "Manager") {
          Swal.fire('Success', 'Login successful', 'success').then(() => {
            this.router.navigate(['/manager/ManagerDashBoard']);
          });
        } else {
          Swal.fire('Error', 'Invalid Username or Password', 'error');
        }
      },
      error => {
        Swal.fire('Error', 'An error occurred', 'error');
      }
    );
  }
}
