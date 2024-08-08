import { Component } from '@angular/core';

@Component({
  selector: 'app-current-plan-info',
  templateUrl: './current-plan-info.component.html',
  styleUrl: './current-plan-info.component.scss',
})
export class CurrentPlanInfoComponent {
  date: Date = new Date();

  get version(): string {
    return '1-year-subscription Premium Packet';
  }

  get startDate(): Date {
    return this.date;
  }

  get expirationDate(): Date {
    const expiration = new Date(this.date);
    expiration.setDate(expiration.getDate() + 7);
    return expiration;
  }
}
