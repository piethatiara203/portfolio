import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users!: User[];

  constructor(private dataService: DataService) {
    this.dataService.getUser().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
  }
}
