import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
})
export class PageNotFound implements OnDestroy {
  router = inject(Router);

  ngOnDestroy(): void {
    this.router.parseUrl('/');
  }
}
