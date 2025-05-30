import { Component } from '@angular/core';
import { SidenavComponent } from '../../../shared/sidenavbar/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar/navbar.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,SidenavComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
