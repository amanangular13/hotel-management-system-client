import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  imports: [],
  templateUrl: './unauthorized.html',
  styleUrl: './unauthorized.scss',
})
export class Unauthorized implements OnDestroy {
  router = inject(Router);

  ngOnDestroy(): void {
    this.router.parseUrl('/login')
  }
}
