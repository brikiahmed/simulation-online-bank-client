import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  showHeaderAndSidenav: boolean = true;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private router: Router,
              private tokenStorageService: TokenStorageService,
              private location: Location
              ) {}

  ngOnInit(): void {
    /*this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        this.showHeaderAndSidenav = !currentRoute.includes('/Login');
      }
    });*/

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {

      this.showHeaderAndSidenav = true;
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']).then(() => {
      // Trigger a page refresh to clear any previous state and refresh the app.
      window.location.reload();
    });  }

  shouldShowSidenav(): boolean {
    return this.showHeaderAndSidenav;
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
