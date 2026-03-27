import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './pages/home-page';
import { NavBar } from './components/nav-bar';
import { SideBar } from './components/side-bar';

@Component({
  selector: 'app-root',
  imports: [HomePage, NavBar, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('planner-app');
}
