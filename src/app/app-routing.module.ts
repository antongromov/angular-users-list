import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./components/users/users";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UserAddComponent} from "./components/user-add/user-add.component";

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: 'user/new', component: UserAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
