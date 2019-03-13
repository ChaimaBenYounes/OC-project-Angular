import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { UserListComponent } from '../user-list/user-list.component';

export class UserService {
  private users: User[];
  userSubject = new Subject<User[]>();

  constructor(){
    this.users = [
      new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']), 
      new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']), 
      new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']), 
    ];
  }
  emitUsers() {
    return this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}