import { Component, signal } from '@angular/core';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { RouterOutlet } from "@angular/router";
import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotel-management-system-client');
}
