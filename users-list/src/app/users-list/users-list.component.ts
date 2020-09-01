import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  username: string;
  name: string;
  role: string;
  selectedList: User[];

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();

    setTimeout(()=>{
      this.username = "Roman";
    }, 2000)    
  }

  search(query: string){
    this.usersList = this.userService.findUser(query);
  }

  sort(direction: string){
    console.log(direction);
    this.usersList = this.userService.sortUsers(direction);
  }

  addUser() {
    this.userService.addUser({
      id: 0,
      name: this.name,
      username: this.username,
      email: "x758306x@gmail.com",
      role: this.role,
      "phone": "380 95 615 1538",
      "website": ""
    });
    this.usersList = this.userService.getUsersList();
  }

  selectItem(users: any){
    this.selectedList = [];
    users.forEach(element => {
      this.selectedList.push(element.value);
    })
  }

  deleteUsers(){
    this.userService.deleteUsers(this.selectedList);
    this.usersList = this.userService.getUsersList();
  }

}
