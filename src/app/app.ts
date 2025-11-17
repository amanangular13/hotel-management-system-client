import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { RouterOutlet } from "@angular/router";
import { ProgressBar } from 'primeng/progressbar';
import { Loading } from './core/services/loading';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  showSpinner = signal(false);
  loadingService = inject(Loading);

  ngOnInit(): void {
    this.showSpinner.set(this.loadingService.getloading());
  }
}
