import { Component } from '@angular/core';
import { User} from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/service/data.service';
// import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users!: User[];
  // modalRef!: BsModalRef
  photo!: string;
  photoFile!: File;

  // users: any
  constructor(private dataService: DataService) {
    this.dataService.getUser().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
  }
}
