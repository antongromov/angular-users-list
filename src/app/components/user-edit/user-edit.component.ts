import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User} from "../../models/user";
import { UserService } from '../../services/user.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: [ './user-edit.component.css' ]
})
export class UserEditComponent implements OnInit {
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (!this.user.name) {
      this.messageService.add('Name can\'t be blank');
      return;
    }
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }
}
