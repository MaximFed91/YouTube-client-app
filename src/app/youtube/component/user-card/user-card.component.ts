import { Component, Input } from '@angular/core';
import { IUserCard } from 'src/app/redux/redux.models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() item!: IUserCard;
}
