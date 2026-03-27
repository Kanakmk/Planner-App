import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'side-bar',
  imports: [CommonModule, ButtonModule, DrawerModule, CardModule, TreeModule],
  templateUrl: 'side-bar.html',
  styleUrl: 'side-bar.css'
})

export class SideBar {

    closedMenu: boolean = false;

    plannerTree: TreeNode[] = [
    {
      label: ' Planner',
      children: []
    }
    ];

    hobbyTree: TreeNode[] = [
    {
      label: ' Hobbies',
      children: []  
    }
    ];

    calendarTree: TreeNode[] = [
    {
      label: ' Calendar',
      children: []
    }
    ];

    galleryTree: TreeNode[] = [
    {
      label: ' Gallery',
      children: []
    }
    ];

}