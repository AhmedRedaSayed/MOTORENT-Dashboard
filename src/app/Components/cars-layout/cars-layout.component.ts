import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../dashboard/sidebar/sidebar.component';
import { NavbarComponent } from '../dashboard/navbar/navbar.component';

@Component({
  selector: 'app-cars-layout',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,NavbarComponent],
  templateUrl: './cars-layout.component.html',
  styleUrl: './cars-layout.component.css'
})
export class CarsLayoutComponent {

}
