import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { UnknownUserGuard } from '../unknown-user.guard';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: ':uuid', component: UserDetailsComponent, canActivate: [UnknownUserGuard] }
    ])
  ]
})
export class UsersModule { }
