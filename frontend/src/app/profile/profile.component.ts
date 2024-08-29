import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: 'password123'  // This would normally be handled more securely
  };
  passwordVisible = false;
  showChangeEmailModal = false;
  showChangePasswordModal = false;
  newEmail = '';
  newPassword = '';

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  openChangeEmailModal() {
    this.showChangeEmailModal = true;
  }

  closeChangeEmailModal() {
    this.showChangeEmailModal = false;
  }

  openChangePasswordModal() {
    this.showChangePasswordModal = true;
  }

  closeChangePasswordModal() {
    this.showChangePasswordModal = false;
  }

  onChangeEmail() {
    // Handle email change logic here
    console.log('New email:', this.newEmail);
    this.closeChangeEmailModal();
  }

  onChangePassword() {
    // Handle password change logic here
    console.log('New password:', this.newPassword);
    this.closeChangePasswordModal();
  }
}
