import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MessageService} from '../../services/message.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  name: string;
  constructor(
    private userService: UserService,
    private location: Location,
    public messageService: MessageService,
  ) {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  save(name: string): void {
    if (!this.name) {
      this.messageService.add('Name can\'t be blank');
      return;
    }
    name = this.name.trim();
    this.userService.addUser({ name } as User)
      .subscribe(() => {
        this.goBack();
      });
  }
}
