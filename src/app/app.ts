import { Component, signal } from '@angular/core';
import { Header } from "./layout/header/header";
import { Sidebar } from "./layout/sidebar/sidebar";
import { Footer } from "./layout/footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotel-management-system-client');
}
