import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  activeLink: string = '/dashboard' ;
  constructor(private router:Router){}



  setActiveLink(link: string) {
    this.activeLink = link;
}

logOut()
{
  localStorage.removeItem("adminToken")
  this.router.navigate(['/'])
}
}
