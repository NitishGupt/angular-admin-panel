import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../../../shared/model/user';
import { UserserviceService } from '../../../../shared/services/services/userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  constructor(private authService: UserserviceService) { }
  userfName: string = '';
  userLName: string = '';
  userEmail: string = '';
  userRole: string = '';
  updateProfile: boolean = false;
  previewUrl: string | ArrayBuffer | null = 'https://placehold.co/150x150';

  ngOnInit() {
    this.authService.currentUser.subscribe((user: User | null) => {
      if (user) {
        this.userfName = user.firstName;
        this.userLName = user.lastName;
        this.userEmail = user.email;
        this.userRole = user.role;
      }

    });
  }
  editProfile() {
    this.updateProfile = true;
  }
  cancelUpdate(fileInput: HTMLInputElement) {
    this.updateProfile = false;
    fileInput.value = '';
    this.previewUrl = 'https://placehold.co/150x150'

  }
  addImage(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.updateProfile = true;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
