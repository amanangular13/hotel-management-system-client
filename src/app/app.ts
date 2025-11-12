import { Component, signal } from '@angular/core';
import { Header } from "./layout/header/header";
import { Sidebar } from "./layout/sidebar/sidebar";
import { Footer } from "./layout/footer/footer";
import { Main } from "./layout/main/main";

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Footer, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotel-management-system-client');
}
