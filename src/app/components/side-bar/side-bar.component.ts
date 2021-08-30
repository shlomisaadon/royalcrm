import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  link: string;
  icon: string;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  navItem: NavItem[] = [
    {
      title: 'customers',
      link: '/dashboard/customers',
      icon: 'bi bi-briefcase-fill',
    },
    {
      title: 'contacts',
      link: '/dashboard/contacts',
      icon: 'bi bi-journal',
    },
    {
      title: 'leads',
      link: '/dashboard/leads',
      icon: 'bi bi-person-bounding-box',
    },
    {
      title: 'reports',
      link: '/dashboard/reports',
      icon: 'bi bi-file-earmark-bar-graph',
    },
    {
      title: 'integrations',
      link: '/dashboard/integrations',
      icon: 'bi bi-layers-fill',
    },
    {
      title: 'year-end sale',
      link: '/dashboard/year-end sale',
      icon: 'bi bi-emoji-sunglasses-fill',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
