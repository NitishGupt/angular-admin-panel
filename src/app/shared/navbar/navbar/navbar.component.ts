import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentUser:string=''
ngOninit(){
   const currentuser1 = localStorage.getItem('currentUser')
   if(currentuser1){
     const currentUser2=JSON.parse(currentuser1)
     this.currentUser=currentUser2.userRole
   }
}
}
