import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [RouterLink],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AddUserComponent {

}
