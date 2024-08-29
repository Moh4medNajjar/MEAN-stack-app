import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  users = [
    { id: 1, username: 'john_doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 2, username: 'jane_smith', email: 'jane.smith@example.com', role: 'User' },
    // Add more user objects here
  ];

  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
