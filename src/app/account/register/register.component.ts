import { Component } from '@angular/core';
import { RegisterForm } from '../../core/Models/registerform';
import { AccountServiceService } from '../account-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: RegisterForm= {username:'',accountType:'Premium',phoneNo:'',email:'',password:'',shopName:'',businessType:'',userRole:'Manager',isDeleted:false}

  constructor(
    private accountServiceService: AccountServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register() {
     if(this.registerForm.username=='' || this.registerForm.password=='' || this.registerForm.email=='' || this.registerForm.phoneNo=='' || this.registerForm.shopName=='' || this.registerForm.businessType=='')
     {
       Swal.fire('Error','Please fill all the fields','error');
       return;
     }
     else
     {
      debugger;
    this.accountServiceService.registerUser(this.registerForm).subscribe(
      response => {
        debugger;
        console.log(response);
        Swal.fire('Success', 'Registration successful', 'success').then(() => {
         this.accountServiceService.getAccountDetails(this.registerForm).subscribe(
          loginResponse => {
            if (loginResponse && loginResponse.user && loginResponse.role[0] == "Manager") {
              Swal.fire('Success', 'Login successful', 'success').then(() => {
                this.router.navigate(['/manager/ManagerDashBoard']);
              });
            } else {
              Swal.fire('Error', 'Invalid Username or Password', 'error');
            }
          }
         );
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  }
}
