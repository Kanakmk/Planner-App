import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'nav-bar',
  imports: [CommonModule, ButtonModule, DrawerModule, CardModule],
  templateUrl: 'nav-bar.html',
  styleUrl: 'nav-bar.css'
})

export class NavBar {
  closedMenu: boolean = false;
}