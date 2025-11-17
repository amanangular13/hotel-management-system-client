import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loading {
  isLoading = signal(false);

  getloading() {
    return this.isLoading();
  }

  setloading(status: boolean) {
    this.isLoading.set(status);
  }
}
