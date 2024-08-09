import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-management-container',
  templateUrl: './management-container.component.html',
  styleUrl: './management-container.component.scss',
})
export class ManagementContainerComponent {
  users: Employees[] = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Alice Smith', email: 'alice.smith@example.com' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    { name: 'Emily Davis', email: 'emily.davis@example.com' },
    { name: 'Michael Wilson', email: 'michael.wilson@example.com' },
    { name: 'Sophia Brown', email: 'sophia.brown@example.com' },
  ];

  teams: Team[] = [
    { name: 'Team A', members: [], color: '#59110c' },
    { name: 'Team B', members: [], color: '#2c3442' },
  ];

  drop(event: CdkDragDrop<Employees[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

interface Team {
  name: string;
  members: Employees[];
  color: string;
}

interface Employees {
  name: string;
  email: string;
}
