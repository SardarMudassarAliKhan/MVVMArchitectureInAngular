import { Component } from '@angular/core';
import { AccountServiceService } from '../../account/account-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  constructor(private accountService: AccountServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.accountService.logout();
    this.router.navigate(['/home']);
  }

}
