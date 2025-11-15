import { Component, inject, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-header',
  imports: [Toolbar, Button, Avatar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{
  items: MenuItem[] | undefined;
  initials: string = 'A';
  loggedIn = signal(false);

  authService = inject(AuthService);

  ngOnInit(): void {
    const status = this.authService.getLoggedIn();
    this.loggedIn.set(status);
  }
}
